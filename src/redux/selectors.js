import {ALL_GENRES} from "./types";

export const getCurrentGenre = (state) => {
    return state.currentGenre;
}

export const getAllGenres = (films) => {
    return [`All genres`, ...new Set(films.map((film) => film.genre))];
}

export const filterFilmsByGenre = (films, currentGenre) => {
    if (currentGenre === ALL_GENRES) {
        return films;
    }

    return films.filter((film) => film.genre === currentGenre);
}