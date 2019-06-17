import * as React from 'react';
import * as renderer from 'react-test-renderer';
import MovieList from './movielist';

const films = [
  {
    name: `Matrix`,
    poster: `https://es31-server.appspot.com/wtw/static/film/preview/matrix.jpg`,
    id: 0,
    genre: `Action`,
    preview_image: `https://es31-server.appspot.com/wtw/static/film/preview/matrix.jpg`,
    preview_video_link: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  }
];

it(`Movie list renders correctly`, () => {
  const tree = renderer
    .create(<MovieList
      films={films}
      activeCard={-1}
      onMouseOver={jest.fn()}
      onMouseLeave={jest.fn()}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
