import React from 'react';
import renderer from 'react-test-renderer';
import {VideoPlayer} from './videoplayer.jsx';
import films from '../../mocks/films.js';

it(`Videoplayer renders correctly`, () => {
  const film = films[0];
  const tree = renderer
    .create(<VideoPlayer
      trailer={film.trailer}
      poster={film.poster}
      isPlaying={false}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
