import React from 'react';
import renderer from 'react-test-renderer';
import {SignIn} from './sign-in.jsx';

describe(`SignIn snapshot tests`, () => {
  it(`SignIn renders correctly`, () => {
    const mock = jest.fn();
    const tree = renderer
      .create(<SignIn authorizeUser={mock}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
