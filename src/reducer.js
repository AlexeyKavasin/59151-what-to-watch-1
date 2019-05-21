const initialState = {
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
};

export const ActionCreators = {
  'SELECT_GENRE': (genre) => {
    return {
      type: `SELECT_GENRE`,
      payload: genre
    };
  },
  'GET_MOVIES_BY_GENRE': (films) => {
    return {
      type: `SELECT_GENRE`,
      payload: films
    };
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `SELECT_GENRE`:
      return Object.assign({}, state, {
        genre: action.payload
      });
    case `GET_MOVIES_BY_GENRE`:
      return Object.assign({}, state, {
        films: action.payload
      });
  }

  return state;
};
