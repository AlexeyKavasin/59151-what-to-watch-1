import {reducer} from "./reducer";
import {ALL_GENRES} from "./types";

describe(`Reducer tests`, () => {
  it(`Returns initial state by default`, () => {
    expect(reducer(undefined, {})).toEqual({
      currentGenre: ALL_GENRES,
      genres: [`Comedy`, `Documentary`],
      films: [
        {
          name: `Fantastic Beasts`,
          poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
          id: 0,
          trailer: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
          isPlaying: false,
          genre: `Comedy`
        },
        {
          name: `Bohemian Rhapsody`,
          poster: `img/bohemian-rhapsody.jpg`,
          id: 1,
          trailer: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
          isPlaying: false,
          genre: `Comedy`
        },
        {
          name: `Macbeth`,
          poster: `img/macbeth.jpg`,
          id: 2,
          trailer: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
          isPlaying: false,
          genre: `Comedy`
        },
        {
          name: `Aviator`,
          poster: `img/Aviator.jpg`,
          id: 3,
          trailer: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
          isPlaying: false,
          genre: `Comedy`
        },
        {
          name: `Pulp Fiction`,
          poster: `img/pulp-fiction.jpg`,
          id: 4,
          trailer: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
          isPlaying: false,
          genre: `Documentary`
        }
      ]
    });
  });

  it(`Selects genre`, () => {
    expect(reducer({
      currentGenre: ALL_GENRES
    }, {
      type: `SELECT_GENRE`,
      payload: `Comedy`
    })).toEqual({
      currentGenre: `Comedy`
    });
  });
});
