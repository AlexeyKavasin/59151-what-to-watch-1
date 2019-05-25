import React from 'react';
import renderer from 'react-test-renderer';
import {MovieList} from './movielist.jsx';
import films from '../../__fixtures__/films.js';

it(`Movie list renders correctly`, () => {
  const tree = renderer
    .create(<MovieList
      films={films}
    />, {createNodeMock: () => ({addEventListener() {}, removeEventListener() {}})})
    .toJSON();

  expect(tree).toMatchSnapshot();
});
