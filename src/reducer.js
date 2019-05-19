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
      genre: `Documentary`
    }
  ]
};

export const ActionCreators = {
  'SELECT_GENRE': (genre) => {
    // TODO проверка что таковой есть или уже не выбран
    return {
      type: `SELECT_GENRE`,
      payload: genre
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
