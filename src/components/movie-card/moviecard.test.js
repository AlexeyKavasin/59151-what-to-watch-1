import React from 'react';
import renderer from 'react-test-renderer';
import {MovieCard} from './moviecard.jsx';
import films from '../../mocks/films.js';

it(`Movie card renders correctly`, () => {
  const film = films[0];
  const tree = renderer
    .create(<MovieCard
      name={film.name}
      poster={film.poster}
      id={film.id}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
