import {reducer} from "./reducer";
import {ALL_GENRES} from "./types";

describe(`Reducer tests`, () => {
  it(`Returns initial state by default`, () => {
    expect(reducer(undefined, {})).toEqual({
      currentGenre: ALL_GENRES,
      films: []
    });
  });

  it(`Selects genre`, () => {
    expect(reducer({
      currentGenre: ALL_GENRES
    }, {
      type: `SELECT_GENRE`,
      payload: `Comedy`
    })).toEqual({
      currentGenre: `Comedy`
    });
  });
});
