import {
  REQUIRED_AUTHORIZATION
} from "../actions";

const initialState = {
  isAuthorizationRequired: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        isAuthorizationRequired: action.payload
      });
  }

  return state;
};
