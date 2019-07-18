import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import {SignIn} from './sign-in';

describe(`SignIn snapshot tests`, () => {
  it(`SignIn renders correctly`, () => {
    const mock = jest.fn();
    const tree = renderer
      .create(
          <Router>
            <SignIn authorizeUser={mock}/>
          </Router>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
