import React from 'react';
import renderer from 'react-test-renderer';
import {MovieCard} from './moviecard.jsx';
import {VideoPlayer} from '../videoplayer/videoplayer.jsx';
import films from '../../mocks/films.js';

it(`Movie card renders correctly`, () => {
  const film = films[0];
  const tree = renderer
    .create(<MovieCard name={film.name} id={film.id} trailer={film.trailer} poster={film.poster} isPlaying={false}>
      <VideoPlayer trailer={film.trailer} poster={film.poster} isPlaying={false}/>
    </MovieCard>, {createNodeMock: () => ({addEventListener() {}, removeEventListener() {}})})
    .toJSON();

  expect(tree).toMatchSnapshot();
});
