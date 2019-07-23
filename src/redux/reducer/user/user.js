import {
  REQUIRED_AUTHORIZATION,
  CHANGE_AUTHORIZATION_STATUS,
  SAVE_USER_DATA
} from "../types";

const initialState = {
  isAuthorizationRequired: false,
  isAuthorized: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        isAuthorizationRequired: action.payload
      });

    case CHANGE_AUTHORIZATION_STATUS:
      return Object.assign({}, state, {
        isAuthorized: action.payload
      });

    case SAVE_USER_DATA:
      return Object.assign({}, state, {
        userData: action.payload
      });
  }

  return state;
};
