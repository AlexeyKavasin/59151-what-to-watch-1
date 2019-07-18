import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
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
          <Router>
            <App
              films={null}
              isAuthorizationRequired={false}
              isAuthorized={false}
              onSignInClick={jest.fn()}
              userData={null}
              isFullWidthPlayerActive={false}
              filmOnTheMainPage={null}
              toggleFullWidthPlayer={jest.fn()}
            />
          </Router>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
