import {
  SELECT_GENRE,
  LOAD_FILMS,
  REQUIRED_AUTHORIZATION,
  CHANGE_AUTHORIZATION_STATUS,
  SAVE_USER_DATA,
  SHOW_MORE_FILMS
} from "./types";

export const fetchFilms = () => (dispatch, getState, api) => {
  return api.get(`/films`).then((response) => {
    dispatch(loadFilms(response.data));
  });
};

export const sendUserData = (email, password) => (dispatch, getState, api) => {
  return api.post(`/login`, {email, password}).then((response) => {
    if (response.status === 200) {
      history.pushState(null, null, `/`);
      dispatch(changeAuthorizationStatus(true));
      dispatch(requireAuthorization(false));
      dispatch(saveUSerData(response.data));
    }
  });
};

export function loadFilms(fetchedFilms) {
  return {
    type: LOAD_FILMS,
    payload: fetchedFilms
  };
}

export function selectGenre(genre) {
  return {
    type: SELECT_GENRE,
    payload: genre
  };
}

export function requireAuthorization(status) {
  return {
    type: REQUIRED_AUTHORIZATION,
    payload: status
  };
}

export function changeAuthorizationStatus(status) {
  return {
    type: CHANGE_AUTHORIZATION_STATUS,
    payload: status
  };
}

export function saveUSerData(userData) {
  return {
    type: SAVE_USER_DATA,
    payload: userData
  };
}

export function showMoreFilms(filmsAmount) {
  return {
    type: SHOW_MORE_FILMS,
    payload: filmsAmount
  }
}
