import {reducer} from "./data";
import {mockedInitialState} from "../mockedInitialstate";
import {SELECT_GENRE, LOAD_FILMS, fetchFilms} from "../actions";
import {ALL_GENRES} from "../types";
import MockAdapter from "axios-mock-adapter";
import {configureAPI} from "../../../api";
import films from "../../../__fixtures__/films";

describe(`Reducer data tests`, () => {
  it(`Returns initial state by default`, () => {
    expect(reducer(mockedInitialState, {})).toEqual(mockedInitialState);
  });

  it(`Makes a correct API call`, () => {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const loader = fetchFilms();

    apiMock
      .onGet(`/films`)
      .reply(200, [{fake: true}]);

    return loader(dispatch, jest.fn(), api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: LOAD_FILMS,
        payload: [{fake: true}],
      });
    });
  });

  it(`Loads films`, () => {
    expect(reducer(mockedInitialState, {
      type: LOAD_FILMS,
      payload: films
    })).toEqual({
      currentGenre: ALL_GENRES,
      films,
      isAuthorizationRequired: false
    });
  });

  it(`Selects genre`, () => {
    expect(reducer(mockedInitialState, {
      type: SELECT_GENRE,
      payload: `Comedy`
    })).toEqual({
      currentGenre: `Comedy`,
      films: [],
      isAuthorizationRequired: false
    });
  });
});
