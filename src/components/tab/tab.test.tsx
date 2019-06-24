import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Tab} from './tab';

describe(`Tab snapshot tests`, () => {
  it(`Tab renders correctly`, () => {
    const mock = jest.fn;
    const tree = renderer
      .create(
      <Tab tabId={1} activeTab={1} onTabClick={mock}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
