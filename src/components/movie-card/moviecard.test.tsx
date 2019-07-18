import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import {MovieCard} from './moviecard';
import {VideoPlayer} from '../videoplayer/videoplayer';
import films from '../../__fixtures__/films.js';

it(`Movie card renders correctly`, () => {
  const film = films[0];
  const tree = renderer
    .create(
    <Router>
      <MovieCard {...film} isPlaying={false}>
        <VideoPlayer {...film} isPlaying={false}/>
      </MovieCard>
    </Router>, {createNodeMock: () => ({addEventListener() {}, removeEventListener() {}})})
    .toJSON();

  expect(tree).toMatchSnapshot();
});
