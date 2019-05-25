import films from "../__fixtures__/films";
import {ALL_GENRES} from "./types";

const genres = [...new Set(films.map((film) => film.genre))];

export const initialState = {
  currentGenre: ALL_GENRES,
  genres,
  films
};
