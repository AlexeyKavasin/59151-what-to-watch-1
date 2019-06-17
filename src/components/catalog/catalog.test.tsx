import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Catalog} from './catalog';
import films from '../../__fixtures__/films';

jest.mock(`../genres-list/genreslist`, () => () => `GenresList`);
jest.mock(`../movie-list/movielist`, () => () => `MovieList`);

describe(`Catalog tests`, () => {
  it(`Catalog renders correctly`, () => {
    const genres = [`All genres`, `Comedy`, `Documentary`];
    const currentGenre = `All genres`;
    const onGenreChange = jest.fn;
    const tree = renderer
      .create(<Catalog onGenreChange={onGenreChange} films={films} currentGenre={currentGenre} genres={genres}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
