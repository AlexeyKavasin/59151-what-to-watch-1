import * as React from 'react';
import * as renderer from 'react-test-renderer';
import GenresList from './genreslist';
import {mockedInitialState} from '../../redux/reducer/mockedInitialstate';

describe(`GenresList snapshot tests`, () => {
  it(`GenresList renders correctly`, () => {
    const genres = [`All genres`, `Comedy`, `Documentary`];
    const currentGenre = mockedInitialState.currentGenre;
    const onGenreChange = jest.fn;
    const tree = renderer
      .create(<GenresList onGenreChange={onGenreChange} currentGenre={currentGenre} genres={genres}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
