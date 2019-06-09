import {
  SELECT_GENRE,
  LOAD_FILMS
} from "../types";
import {ALL_GENRES} from "../../../constants/constants";

const initialState = {
  currentGenre: ALL_GENRES,
  films: []
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
  }

  return state;
};
