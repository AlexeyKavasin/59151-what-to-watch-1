import * as React from 'react';
import renderer from 'react-test-renderer';
import GenresList from './genreslist';
import {mockedInitialState} from '../../redux/reducer/mockedInitialstate';

describe(`GenresList snapshot tests`, () => {
  it(`GenresList renders correctly`, () => {
    const genres = [`All genres`, `Comedy`, `Documentary`];
    const films = mockedInitialState.films;
    const currentGenre = mockedInitialState.currentGenre;
    const tree = renderer
      .create(<GenresList currentGenre={currentGenre} genres={genres}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
