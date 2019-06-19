import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {MovieCard} from './moviecard';
import {VideoPlayer} from '../videoplayer/videoplayer';
import films from '../../__fixtures__/films.js';

it(`Movie card renders correctly`, () => {
  const film = films[0];
  const tree = renderer
    .create(<MovieCard {...film} isPlaying={false}>
      <VideoPlayer {...film} isPlaying={false}/>
    </MovieCard>, {createNodeMock: () => ({addEventListener() {}, removeEventListener() {}})})
    .toJSON();

  expect(tree).toMatchSnapshot();
});
