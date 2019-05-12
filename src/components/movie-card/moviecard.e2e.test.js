import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MovieCard} from '../movie-card/moviecard.jsx';

Enzyme.configure({adapter: new Adapter()});

const mock = {
  id: 0,
  name: `Fantastic Beasts`,
  src: `img/fantastic-beasts-the-crimes-of-grindexelwald.jpg`
};

it(`Click on play returns correct id`, () => {
  const {id, name, src} = mock;
  const handleClick = jest.fn();
  const movieCard = shallow(<MovieCard
    name={name}
    src={src}
    onPlayClick={handleClick}
    id={id}
  />);

  const playBtn = movieCard.find(`.small-movie-card__play-btn`);
  expect(playBtn.length).toEqual(1);

  playBtn.simulate(`click`, {});
  expect(handleClick).toHaveBeenCalledWith(expect.any(Object), id);
});
