import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {SignIn} from './sign-in.jsx';

describe(`SignIn snapshot tests`, () => {
  it(`SignIn renders correctly`, () => {
    const mock = jest.fn();
    const tree = renderer
      .create(
          <BrowserRouter>
            <SignIn authorizeUser={mock}/>
          </BrowserRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
