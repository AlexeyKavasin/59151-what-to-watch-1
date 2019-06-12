import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {MainPage} from './main-page.jsx';

jest.mock(`../catalog/catalog.jsx`, () => () => `Catalog`);

describe(`MainPage snapshot tests`, () => {
  it(`MainPage renders correctly`, () => {
    const mock = jest.fn();
    const tree = renderer
      .create(
          <BrowserRouter>
            <MainPage 
                isAuthorizationRequired={false}
                isAuthorized={false}
                onSignInClick={mock}/>
          </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});