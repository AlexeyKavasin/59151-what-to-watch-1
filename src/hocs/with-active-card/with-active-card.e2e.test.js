import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {withActiveCard} from './with-active-card.js';

Enzyme.configure({adapter: new Adapter()});

const MockedComponent = () => <div/>;
const MockedComponentWithActiveCard = withActiveCard(MockedComponent);

describe(`withActiveCard hoc tests`, () => {
  it(`Should return -1 initially`, () => {
    const wrapper = shallow(<MockedComponentWithActiveCard/>);

    expect(wrapper.length).toEqual(1);
    expect(wrapper.props().activeCard).toEqual(-1);
  });

  it(`Should return id on mouseEnter`, () => {
    const wrapper = shallow(<MockedComponentWithActiveCard/>);

    expect(wrapper.length).toEqual(1);
    wrapper.props().onMouseOver(expect.any(Object), {id: 1});
    expect(wrapper.props().activeCard).toEqual(1);
  });

  it(`Should return -1 on mouseLeave`, () => {
    const wrapper = shallow(<MockedComponentWithActiveCard/>);

    expect(wrapper.length).toEqual(1);
    wrapper.props().onMouseOver(expect.any(Object), {id: 1});
    wrapper.props().onMouseLeave();
    expect(wrapper.props().activeCard).toEqual(-1);
  });
});
