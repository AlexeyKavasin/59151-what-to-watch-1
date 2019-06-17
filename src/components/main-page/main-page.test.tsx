import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {HashRouter} from 'react-router-dom';
import {MainPage} from './main-page';

jest.mock(`../catalog/catalog`, () => () => `Catalog`);

describe(`MainPage snapshot tests`, () => {
  it(`MainPage renders correctly`, () => {
    const mock = jest.fn();
    const tree = renderer
      .create(
          <HashRouter>
            <MainPage
              isAuthorizationRequired={false}
              isAuthorized={false}
              onSignInClick={mock}
              userData={null}/>
          </HashRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
