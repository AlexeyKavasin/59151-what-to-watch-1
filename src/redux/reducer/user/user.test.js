import {reducer} from "./user";
import {mockedInitialState} from "../mockedInitialstate";
import {REQUIRED_AUTHORIZATION} from "../actions";
import {ALL_GENRES} from "../types";

describe(`Reducer user tests`, () => {
  it(`Returns isAuthorizationRequired initial value`, () => {
    expect(reducer(mockedInitialState.isAuthorizationRequired, {}))
    .toEqual(mockedInitialState.isAuthorizationRequired);
  });

  it(`Returns isAuthorizationRequired true on action`, () => {
    expect(reducer(mockedInitialState, {
      type: REQUIRED_AUTHORIZATION,
      payload: true
    })).toEqual({
      currentGenre: ALL_GENRES,
      films: [],
      isAuthorizationRequired: true
    });
  });
});

