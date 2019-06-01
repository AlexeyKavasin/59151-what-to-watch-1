import React from 'react';
import renderer from 'react-test-renderer';
import {GenresList} from './genreslist.jsx';
import {initialState} from '../../redux/initialstate';

describe(`GenresList snapshot tests`, () => {
  it(`GenresList renders correctly`, () => {
    const genres = [`All genres`, `Comedy`, `Documentary`];
    const films = initialState.films;
    const currentGenre = initialState.currentGenre;
    const tree = renderer
      .create(<GenresList films={films} currentGenre={currentGenre} genres={genres}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
