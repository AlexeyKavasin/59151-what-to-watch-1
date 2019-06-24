import {
  SELECT_GENRE,
  LOAD_FILMS,
  SHOW_MORE_FILMS
} from "../types";
import {ALL_GENRES, MAX_FILMS_TO_SHOW} from "../../../constants/constants";

const initialState = {
  currentGenre: ALL_GENRES,
  films: [],
  filmsToShow: MAX_FILMS_TO_SHOW
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
        films: action.payload
      });
  }

  return state;
};
