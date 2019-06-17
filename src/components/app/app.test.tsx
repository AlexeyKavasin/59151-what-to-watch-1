import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {HashRouter} from 'react-router-dom';
import {App} from './app';

jest.mock(`../catalog/catalog.tsx`, () => () => `Catalog`);

const mockedUserData = {
  id: 0,
  email: 'qwerty@qwerty.ru',
  name: 'qwerty',
  avatarUrl: 'qwerty.jpg'
}

describe(`App snapshot tests`, () => {
  it(`App renders correctly`, () => {
    const tree = renderer
      .create(
          <HashRouter>
            <App
              isAuthorizationRequired={false}
              isAuthorized={false}
              onSignInClick={jest.fn()}
              userData={mockedUserData}
            />
          </HashRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
