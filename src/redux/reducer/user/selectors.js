import {NameSpaces} from "../name-spaces.js";

const NAME_SPACE = NameSpaces.USER;

export const getAuthorizationStatus = (state) => {
  return state[NAME_SPACE].isAuthorizationRequired;
};
