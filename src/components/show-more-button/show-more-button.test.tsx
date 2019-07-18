import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import {ShowMoreButton} from './show-more-button';

it(`Show more button renders correctly`, () => {
  const tree = renderer
    .create(
      <Router>
        <ShowMoreButton
          filmsToShow={20}
          onShowMoreClick={jest.fn()}
          filmsLength={20}
        />
    </Router>).toJSON();

  expect(tree).toMatchSnapshot();
});
