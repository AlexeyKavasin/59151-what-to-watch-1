import React from 'react';
import renderer from 'react-test-renderer';
import {Catalog} from './catalog.jsx';
import films from '../../mocks/films.js';

it(`Catalog renders correctly`, () => {
  const tree = renderer
    .create(<Catalog
      films={films}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
