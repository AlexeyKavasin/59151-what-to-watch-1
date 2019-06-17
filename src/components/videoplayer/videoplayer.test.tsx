import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {VideoPlayer} from './videoplayer';
import films from '../../__fixtures__/films.js';

it(`Videoplayer renders correctly`, () => {
  const film = films[0];
  const tree = renderer
    .create(<VideoPlayer
      trailer={film.trailer}
      poster={film.poster}
      isPlaying={false}
    />, {createNodeMock: () => ({addEventListener() {}, removeEventListener() {}})})
    .toJSON();

  expect(tree).toMatchSnapshot();
});
