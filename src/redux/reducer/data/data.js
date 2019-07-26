import {
  SELECT_GENRE,
  LOAD_FILMS,
  SHOW_MORE_FILMS,
  ADD_COMMENT,
  LOAD_COMMENTS,
  TOGGLE_FAVORITE,
  LOAD_FAVORITE_FILMS
} from "../types";
import {ALL_GENRES, FILMS_TO_SHOW_PER_LOAD} from "../../../constants/constants";

const initialState = {
  currentGenre: ALL_GENRES,
  films: [],
  favoriteFilms: [],
  filmsToShow: FILMS_TO_SHOW_PER_LOAD,
  comments: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_GENRE:
      return Object.assign({}, state, {
        currentGenre: action.payload
      });

    case LOAD_FILMS:
      return Object.assign({}, state, {
        films: action.payload
      });

    case SHOW_MORE_FILMS:
      return Object.assign({}, state, {
        filmsToShow: action.payload
      });

    case LOAD_COMMENTS:
      return Object.assign({}, state, {
        comments: action.payload
      });

    case ADD_COMMENT:
      return Object.assign({}, state, {
        comments: action.payload
      });

    case LOAD_FAVORITE_FILMS:
      return Object.assign({}, state, {
        favoriteFilms: action.payload
      });

    case TOGGLE_FAVORITE:
      const films = [
        ...state.films.filter((f) => f.id !== action.payload.id),
        ...[action.payload]
      ].sort((curr, next) => curr.id - next.id);

      return Object.assign({}, state, {
        films
      });
  }

  return state;
};
