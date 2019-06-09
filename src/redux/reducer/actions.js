import {
  SELECT_GENRE,
  LOAD_FILMS,
  REQUIRED_AUTHORIZATION
} from "./types"

export const fetchFilms = () => (dispatch, getState, api) => {
  return api.get(`/films`).then((response) => {
    dispatch(loadFilms(response.data));
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
