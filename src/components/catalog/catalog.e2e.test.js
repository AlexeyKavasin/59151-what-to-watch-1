import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Catalog} from './catalog.jsx';

Enzyme.configure({adapter: new Adapter()});

const names = [`Fantastic Beasts`];

it(`Click on card heading triggers callback`, () => {
  const clickHandler = jest.fn();
  const catalog = shallow(<Catalog
    names={names}
    onHeadingClick={clickHandler}
  />);

  const heading = catalog.find(`.small-movie-card__title`);
  expect(heading.length).toEqual(1);
  heading.simulate(`click`);

  expect(clickHandler).toHaveBeenCalled();
});
