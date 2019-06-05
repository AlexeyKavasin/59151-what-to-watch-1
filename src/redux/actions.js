import {initialState} from './initialstate';
import {ALL_GENRES} from './types';

export const SELECT_GENRE = `SELECT_GENRE`;
export const GET_FILMS_BY_GENRE = `GET_FILMS_BY_GENRE`;
export const LOAD_FILMS = `LOAD_FILMS`;

export const fetchFilms = () => (dispatch, getState, api) => {
  return api.get(`/films`).then((response) => {
    dispatch(loadFilms(response.data));
  });
};

export function loadFilms(fetchedFilms) {
  return {
    type: `LOAD_FILMS`,
    payload: fetchedFilms
  };
}

export function selectGenre(genre) {
  return {
    type: `SELECT_GENRE`,
    payload: genre
  };
}

export function getFilmsByGenre(genre, films) {
  let filmsByGenre;

  if (genre === ALL_GENRES) {
    filmsByGenre = films;
  } else {
    filmsByGenre = films.filter((film) => film.genre === genre);
  }

  return {
    type: `GET_FILMS_BY_GENRE`,
    payload: filmsByGenre
  };
}
