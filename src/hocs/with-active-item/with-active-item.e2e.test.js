import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {withActiveItem} from './with-active-item.js';

Enzyme.configure({adapter: new Adapter()});

const MockedComponent = () => <div/>;
const MockedComponentwithActiveItem = withActiveItem(MockedComponent);

describe(`withActiveItem hoc tests`, () => {
  it(`Should return null initially`, () => {
    const wrapper = shallow(<MockedComponentwithActiveItem/>);

    expect(wrapper.length).toEqual(1);
    expect(wrapper.props().activeItem).toEqual(null);
  });

  it(`Should return activeItem on some event`, () => {
    const wrapper = shallow(<MockedComponentwithActiveItem/>);

    expect(wrapper.length).toEqual(1);
    wrapper.props().setActiveItem({id: 1});
    expect(wrapper.props().activeItem).toEqual({id: 1});
  });
});
