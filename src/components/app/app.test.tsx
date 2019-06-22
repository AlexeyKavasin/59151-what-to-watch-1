import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {HashRouter} from 'react-router-dom';
import {App} from './app';

jest.mock(`../main-page/main-page`, () => {
  return {
    'default': 'MainPage'
  }
});

describe(`App snapshot tests`, () => {
  it(`App renders correctly`, () => {
    const tree = renderer
      .create(
          <HashRouter>
            <App
              isAuthorizationRequired={false}
              isAuthorized={false}
              onSignInClick={jest.fn()}
              userData={null}
              films={null}
            />
          </HashRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
