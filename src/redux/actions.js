export const SELECT_GENRE = `SELECT_GENRE`;

export function selectGenre(genre) {
  return {
    type: `SELECT_GENRE`,
    payload: genre
  };
}
