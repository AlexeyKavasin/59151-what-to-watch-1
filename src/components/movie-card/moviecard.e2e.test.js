import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MovieCard} from "../movie-card/moviecard.jsx";

Enzyme.configure({adapter: new Adapter()});

const mock = {
  ind: 0,
  name: `Fantastic Beasts`,
  src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
};

it(`Click on play btn returns correct card number`, () => {
  const {ind, name, src} = mock;
  const clickHandler = jest.fn(() => ind);
  const movieCard = shallow(<MovieCard
    name={name}
    src={src}
    onPlayBtnClick={clickHandler}
    key={ind}
  />);

  const playBtn = movieCard.find(`.small-movie-card__play-btn`);
  expect(playBtn.length).toEqual(1);

  playBtn.simulate(`click`);
  expect(clickHandler).toHaveReturnedWith(ind);
});
