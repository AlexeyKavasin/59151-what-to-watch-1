import {ALL_GENRES} from "./types";

export const filterFilms = (films, currentGenre) => {
  if (currentGenre === ALL_GENRES) {
    return films;
  }

  return films.filter((film) => film.genre === currentGenre);
};

export const filterGenres = (films) => {
  return [`${ALL_GENRES}`, ...new Set(films.map((film) => film.genre))]
};
