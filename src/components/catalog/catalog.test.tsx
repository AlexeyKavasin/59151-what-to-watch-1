import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Catalog} from './catalog';
import films from '../../__fixtures__/films';

jest.mock(`../genres-list/genreslist`, () => {
  return {
    'default': 'GenresList'
  }
});

jest.mock(`../movie-list/movielist`, () => {
  return {
    'default': 'MovieList'
  }
});

describe(`Catalog tests`, () => {
  it(`Catalog renders correctly`, () => {
    const genres = [`All genres`, `Comedy`, `Documentary`];
    const currentGenre = `All genres`;
    const onGenreChange = jest.fn;
    const onShowMoreClick = jest.fn;
    const tree = renderer
      .create(<Catalog 
        filmsToShow={20}
        filmsLength={20}
        onShowMoreClick={onShowMoreClick}
        onGenreChange={onGenreChange}
        films={films}
        currentGenre={currentGenre}
        genres={genres}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
