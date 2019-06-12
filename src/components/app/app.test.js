import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {App} from './app.jsx';

jest.mock(`../catalog/catalog.jsx`, () => () => `Catalog`);

describe(`App snapshot tests`, () => {
  it(`App renders correctly`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <App
              isAuthorizationRequired={false}
              isAuthorized={false}
              onSignInClick={jest.fn()}
            />
          </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
