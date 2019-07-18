import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import {MoviePageDetails} from './movie-page-details';

const films = [
    {
      name: `Matrix`,
      poster: `https://es31-server.appspot.com/wtw/static/film/preview/matrix.jpg`,
      id: 1,
      genre: `Action`,
      preview_image: `https://es31-server.appspot.com/wtw/static/film/preview/matrix.jpg`,
      preview_video_link: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      released: 1999,
      background_image: `https://es31-server.appspot.com/wtw/static/film/preview/matrix.jpg`,
      starring: [`Some actor`]
    }
  ];

it(`Movie list renders correctly`, () => {
  const tree = renderer
    .create(
      <Router>
        <MoviePageDetails
          films={films}
          match={{params: {id: 1}}}
        />
    </Router>).toJSON();

  expect(tree).toMatchSnapshot();
});
