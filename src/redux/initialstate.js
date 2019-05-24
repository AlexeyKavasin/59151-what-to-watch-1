import films from "../mocks/films";

const genres = [...new Set(films.map((film) => film.genre))];

export const initialState = {
  currentGenre: `All genres`,
  genres,
  films
};
