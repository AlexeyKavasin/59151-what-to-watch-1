import {initialState} from "./initialstate";
import {
  SELECT_GENRE,
  GET_FILMS_BY_GENRE
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
  }

  return state;
};
