import React from 'react';
import renderer from 'react-test-renderer';
import {MovieList} from './movielist.jsx';
import films from '../../mocks/films.js';

it(`Movie list renders correctly`, () => {
  const tree = renderer
    .create(<MovieList
      films={films}
      onPlayBtnClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
