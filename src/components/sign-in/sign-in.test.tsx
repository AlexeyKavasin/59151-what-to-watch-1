import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {HashRouter} from 'react-router-dom';
import {SignIn} from './sign-in';

describe(`SignIn snapshot tests`, () => {
  it(`SignIn renders correctly`, () => {
    const mock = jest.fn();
    const tree = renderer
      .create(
          <HashRouter>
            <SignIn loadUserFavorites={mock} authorizeUser={mock}/>
          </HashRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
