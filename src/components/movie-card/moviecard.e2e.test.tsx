import * as React from 'react';
import {configure, shallow} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {MovieCard} from './moviecard';
import {VideoPlayer} from '../videoplayer/videoplayer';

configure({adapter: new Adapter()});

const mock = {
  id: 0,
  name: `Fantastic Beasts`,
  poster: `img/fantastic-beasts-the-crimes-of-grindexelwald.jpg`,
  trailer: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  isPlaying: false
};

it(`Mouse over card returns correct card id`, () => {
  const {id, name, poster, trailer, isPlaying} = mock;
  const handleMouseOver = jest.fn();
  const handleMouseLeave = jest.fn();
  const movieCard = shallow(<MovieCard
    name={name}
    poster={poster}
    trailer={trailer}
    isPlaying={isPlaying}
    onMouseOver={handleMouseOver}
    onMouseLeave={handleMouseLeave}
    id={id}>
    <VideoPlayer trailer={trailer} poster={poster} isPlaying={isPlaying}/>
  </MovieCard>);

  const wrapper = movieCard.find(`.small-movie-card`);
  expect(wrapper.length).toEqual(1);

  wrapper.simulate(`mouseover`, {});
  expect(handleMouseOver).toHaveBeenCalledWith(expect.any(Object), id);
});
