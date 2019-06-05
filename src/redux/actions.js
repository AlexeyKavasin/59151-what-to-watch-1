export const SELECT_GENRE = `SELECT_GENRE`;
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
