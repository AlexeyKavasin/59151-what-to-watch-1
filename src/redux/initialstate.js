import films from "../__fixtures__/films";
import {ALL_GENRES} from "./types";

export const initialState = {
  currentGenre: ALL_GENRES,
  films
};
