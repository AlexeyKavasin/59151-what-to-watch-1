import {
  SELECT_GENRE,
  LOAD_FILMS,
  SHOW_MORE_FILMS
} from "../types";
import {ALL_GENRES, FILMS_TO_SHOW_PER_LOAD} from "../../../constants/constants";

const initialState = {
  currentGenre: ALL_GENRES,
  films: [],
  filmsToShow: FILMS_TO_SHOW_PER_LOAD
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
  }

  return state;
};
