import {ALL_GENRES} from "./types";

export const filterFilms = (films, currentGenre) => {
  if (currentGenre === ALL_GENRES) {
    return films;
  }

  return films.filter((film) => film.genre === currentGenre);
};
