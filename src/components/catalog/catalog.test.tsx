import React from 'react';
import renderer from 'react-test-renderer';
import {Catalog} from './catalog.js';
import films from "../../__fixtures__/films";

jest.mock(`../genres-list/genreslist.tsx`, () => () => `GenresList`);
jest.mock(`../movie-list/movielist.tsx`, () => () => `MovieList`);

describe(`Catalog tests`, () => {
  it(`Catalog renders correctly`, () => {
    const genres = [`All genres`, `Comedy`, `Documentary`];
    const currentGenre = `All genres`;
    const tree = renderer
      .create(<Catalog films={films} currentGenre={currentGenre} genres={genres}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
