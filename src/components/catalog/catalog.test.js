import React from 'react';
import renderer from 'react-test-renderer';
import {Catalog} from './catalog.jsx';

const names = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`];

it(`Catalog renders correctly`, () => {
  const tree = renderer
    .create(<Catalog
      names={names}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
