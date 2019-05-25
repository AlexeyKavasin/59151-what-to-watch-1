import React from 'react';
import renderer from 'react-test-renderer';
import Catalog from './catalog.jsx';

jest.mock(`../genres-list/genreslist.jsx`, () => () => `GenresList`);
jest.mock(`../movie-list/movielist.jsx`, () => () => `MovieList`);

describe(`Catalog tests`, () => {
  it(`Catalog renders correctly`, () => {
    const tree = renderer
      .create(<Catalog/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
