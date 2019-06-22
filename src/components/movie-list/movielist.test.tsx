import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {HashRouter} from 'react-router-dom';
import MovieList from './movielist';

const films = [
  {
    name: `Matrix`,
    poster: `https://es31-server.appspot.com/wtw/static/film/preview/matrix.jpg`,
    id: 0,
    genre: `Action`,
    preview_image: `https://es31-server.appspot.com/wtw/static/film/preview/matrix.jpg`,
    preview_video_link: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    released: 1999,
    background_image: `https://es31-server.appspot.com/wtw/static/film/preview/matrix.jpg`,
    starring: [`Actor1`, `Actor2`],
    run_time: 120,
    director: `Director`
  }
];

it(`Movie list renders correctly`, () => {
  const tree = renderer
    .create(
      <HashRouter>
        <MovieList
          films={films}
          activeCard={-1}
          onMouseOver={jest.fn()}
          onMouseLeave={jest.fn()}
        />
    </HashRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});
