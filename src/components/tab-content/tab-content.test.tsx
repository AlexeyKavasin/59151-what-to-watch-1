import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {TabContent} from './tab-content';

describe(`TabContent snapshot tests`, () => {
  it(`TabContent renders correctly`, () => {
    const tree = renderer
      .create(
      <TabContent tabId={1} activeTab={1}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
