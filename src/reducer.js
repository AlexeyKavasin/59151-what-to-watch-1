import mockfilms from "./mocks/films";
const genres = ['All Genres', ...new Set(mockfilms.map(film => film.genre))];
const initialState = {
  currentGenre: `All genres`,
  genres,
  films: mockfilms
};

export const ActionCreators = {
  'SELECT_GENRE': (genre) => {
    return {
      type: `SELECT_GENRE`,
      payload: genre
    };
  }
};

function filterFilms(genre) {
  if (genre === `All genres`) {
    return mockfilms;
  }

  return mockfilms.filter(film => film.genre === genre);
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `SELECT_GENRE`:
      return Object.assign({}, state, {
        currentGenre: action.payload,
        films: filterFilms(action.payload)
      });
  }

  return state;
};
