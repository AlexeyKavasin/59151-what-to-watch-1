import React from 'react';
import renderer from 'react-test-renderer';
import {MovieCard} from './moviecard.jsx';
import {VideoPlayer} from '../videoplayer/videoplayer.jsx';
import films from '../../mocks/films.js';

it(`Movie card renders correctly`, () => {
  const film = films[0];
  const tree = renderer
    .create(<MovieCard {...film} isPlaying={false}>
      <VideoPlayer {...film} isPlaying={false}/>
    </MovieCard>, {createNodeMock: () => ({addEventListener() {}, removeEventListener() {}})})
    .toJSON();

  expect(tree).toMatchSnapshot();
});
