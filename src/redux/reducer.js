import {initialState} from "./initialstate";
import {
  SELECT_GENRE,
  GET_FILMS_BY_GENRE,
  LOAD_FILMS
} from "./actions";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_GENRE:
      return Object.assign({}, state, {
        currentGenre: action.payload
      });

    case GET_FILMS_BY_GENRE:
      return Object.assign({}, state, {
        films: action.payload
      });

    case LOAD_FILMS:
      return Object.assign({}, state, {
        films: action.payload
      });
  }

  return state;
};
