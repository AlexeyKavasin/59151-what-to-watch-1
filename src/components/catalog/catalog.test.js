import React from 'react';
import renderer from 'react-test-renderer';
import {Catalog} from './catalog.jsx';
import {initialState} from '../../redux/initialstate';

it(`Catalog renders correctly`, () => {
  const tree = renderer
    .create(<Catalog {...initialState}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
