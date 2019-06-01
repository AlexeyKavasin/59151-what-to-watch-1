import {initialState} from './initialstate';
import {ALL_GENRES} from './types';

export const SELECT_GENRE = `SELECT_GENRE`;
export const GET_FILMS_BY_GENRE = `GET_FILMS_BY_GENRE`;

export function selectGenre(genre) {
  return {
    type: `SELECT_GENRE`,
    payload: genre
  };
}

export function getFilmsByGenre(genre) {
  let filmsByGenre;

  if (genre === ALL_GENRES) {
    filmsByGenre = initialState.films;
  } else {
    filmsByGenre = initialState.films.filter((film) => film.genre === genre);
  }

  return {
    type: `GET_FILMS_BY_GENRE`,
    payload: filmsByGenre
  };
}
