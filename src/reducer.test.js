import {reducer} from "./reducer";

describe(`Reducer tests`, () => {
  it(`Returns initial state by default`, () => {
    expect(reducer(undefined, {})).toEqual({
      genres: `All genres`,
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
          genre: `Documentary`
        }
      ]
    });
  });

  it(`Selects genre`, () => {
    expect(reducer({
      genres: `All genres`
    }, {
      type: `SELECT_GENRE`,
      payload: `Comedy`
    })).toEqual({
      genres: `Comedy`
    });
  });

  it(`Gets movies by genre`, () => {
    expect(reducer({
      genres: `All genres`,
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
          genre: `Documetary`
        }
      ]
    }, {
      type: `GET_MOVIES_BY_GENRE`,
      payload: [
        {
          name: `Fantastic Beasts`,
          poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
          id: 0,
          trailer: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
          isPlaying: false,
          genre: `Comedy`
        }
      ]
    })).toEqual({
      genres: `All genres`,
      films: [
        {
          name: `Fantastic Beasts`,
          poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
          id: 0,
          trailer: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
          isPlaying: false,
          genre: `Comedy`
        }
      ]
    });
  });
});
