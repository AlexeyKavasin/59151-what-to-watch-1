import {createSelector} from "reselect";
import {NameSpaces} from "../name-spaces.js";
import {ALL_GENRES} from "../../../constants/constants";

const NAME_SPACE = NameSpaces.DATA;

export const getCurrentGenre = (state) => {
  return state[NAME_SPACE].currentGenre;
};

const getFilms = (state) => {
  return state[NAME_SPACE].films;
};

export const getAllGenres = createSelector(
    getFilms,
    (films) => ([ALL_GENRES, ...new Set(films.map((film) => film.genre))])
);

export const filterFilmsByGenre = createSelector(
    getFilms,
    getCurrentGenre,
    (films, currentGenre) => {
      if (currentGenre === ALL_GENRES) {
        return films;
      }

      return films.filter((film) => film.genre === currentGenre);
    }
);
