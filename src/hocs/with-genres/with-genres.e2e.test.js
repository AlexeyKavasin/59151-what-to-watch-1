import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {withGenres} from './with-genres.js';
import films from '../../__fixtures__/films';
import {ALL_GENRES} from '../../redux/types';

Enzyme.configure({adapter: new Adapter()});

const MockedComponent = () => <div/>;
const MockedComponentwithGenres = withGenres(MockedComponent);

describe(`withGenres hoc tests`, () => {
  it(`Should return ${ALL_GENRES} if nothing passed`, () => {
    const wrapper = shallow(<MockedComponentwithGenres films={[]}/>);

    expect(wrapper.length).toEqual(1);
    expect(wrapper.props().genres).toEqual([ALL_GENRES]);
  });

  it(`Should return filtered genres`, () => {
    const wrapper = shallow(<MockedComponentwithGenres films={films}/>);

    expect(wrapper.length).toEqual(1);
    expect(wrapper.props().genres).toEqual([ALL_GENRES, ...new Set(films.map((film) => film.genre))]);
  });
});
