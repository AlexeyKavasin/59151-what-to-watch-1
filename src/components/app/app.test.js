import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

jest.mock(`../catalog/catalog.jsx`, () => () => `Catalog`);

describe(`App snapshot tests`, () => {
  it(`App renders correctly`, () => {
    const tree = renderer
      .create(<App/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
