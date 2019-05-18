import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MovieCard} from '../movie-card/moviecard.jsx';
import {VideoPlayer} from '../videoplayer/videoplayer.jsx';

Enzyme.configure({adapter: new Adapter()});

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
  const movieCard = shallow(<MovieCard
    name={name}
    poster={poster}
    trailer={trailer}
    isPlaying={isPlaying}
    onMouseOver={handleMouseOver}
    id={id}>
    <VideoPlayer trailer={trailer} poster={poster} isPlaying={isPlaying}/>
  </MovieCard>);

  const wrapper = movieCard.find(`.small-movie-card`);
  expect(wrapper.length).toEqual(1);

  wrapper.simulate(`mouseover`);
  expect(handleMouseOver).toHaveBeenCalledWith(id);
});
