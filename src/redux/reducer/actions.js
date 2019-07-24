import {
  SELECT_GENRE,
  LOAD_FILMS,
  REQUIRED_AUTHORIZATION,
  CHANGE_AUTHORIZATION_STATUS,
  SAVE_USER_DATA,
  SHOW_MORE_FILMS,
  LOAD_COMMENTS,
  ADD_COMMENT,
  TOGGLE_FAVORITE
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

export const getUserComments = (filmId) => (dispatch, getState, api) => {
  return api.get(`/comments/${filmId}`).then((response) => {
    dispatch(loadComments(response.data));
  });
};

export const sendUserComment = ({comment, rating, filmId}) => (dispatch, getState, api) => {
  return api.post(`/comments/${filmId}`, {comment, rating}).then((response) => {
    dispatch(addComment(response.data));
  });
};

export const toggleUserFavourites = (film) => (dispatch, getState, api) => {
  return api.post(`/favorite/${film.id}/${film.is_favorite ? 0 : 1}`).then((response) => {
    dispatch(toggleFavorite(response.data));
  })
}

export function loadFilms(fetchedFilms) {
  return {
    type: LOAD_FILMS,
    payload: fetchedFilms
  };
}

export function loadComments(fetchComments) {
  return {
    type: LOAD_COMMENTS,
    payload: fetchComments
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
  };
}

export function addComment(comments) {
  return {
    type: ADD_COMMENT,
    payload: comments
  };
}

export function toggleFavorite(film) {
  return {
    type: TOGGLE_FAVORITE,
    payload: film
  }
}
