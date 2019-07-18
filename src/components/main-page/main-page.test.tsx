import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import {MainPage} from './main-page';

jest.mock(`../catalog/catalog`, () => {
  return {
    'default': 'Catalog'
  }
});

const film = {
  name: `Matrix`,
  poster: `https://es31-server.appspot.com/wtw/static/film/preview/matrix.jpg`,
  poster_image: `https://es31-server.appspot.com/wtw/static/film/poster/matrix.jpg`,
  id: 0,
  genre: `Action`,
  preview_image: `https://es31-server.appspot.com/wtw/static/film/preview/matrix.jpg`,
  preview_video_link: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  released: 1999,
  background_image: `https://es31-server.appspot.com/wtw/static/film/preview/matrix.jpg`,
  starring: [`Actor1`, `Actor2`],
  run_time: 120,
  director: `Director`,
  rating: 10,
  scores_count: 1000,
  description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, soluta dolor? Cumque perferendis quaerat natus sapiente accusantium sequi. Ullam itaque, voluptatem nostrum quae fugiat voluptates necessitatibus aperiam eum numquam officiis.`,
  video_link: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
}

describe(`MainPage snapshot tests`, () => {
  it(`MainPage renders correctly`, () => {
    const mock = jest.fn();
    const tree = renderer
      .create(
          <Router>
            <MainPage
              films={null}
              isAuthorizationRequired={false}
              isAuthorized={false}
              onSignInClick={mock}
              userData={null}
              isFullWidthPlayerActive={false}
              toggleFullWidthPlayer={mock}
              filmOnTheMainPage={film}
              />
          </Router>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
