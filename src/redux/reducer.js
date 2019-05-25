import {initialState} from "./initialstate";
import {
  SELECT_GENRE,
} from "./actions";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_GENRE:
      return Object.assign({}, state, {
        currentGenre: action.payload
      });
  }

  return state;
};
