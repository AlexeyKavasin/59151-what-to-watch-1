import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger"; // new nodejs winston, http morgan, debug
/**
 * const dbg = debug('app:db');
 * dbg('connect %s', connStr);
 * DEBUG=app:* npm start
 */
import {compose} from "recompose"; // not needed
import {Provider} from "react-redux";
import combinedReducers from "./redux/reducer/index";
import {configureAPI} from "./api.js";
import App from "./components/app/app.jsx";
import {fetchFilms} from "./redux/reducer/actions.js";

const api = configureAPI((...args) => store.dispatch(...args));
const logger = createLogger({

});

const middlewares = [
  thunk.withExtraArgument(api),
  IS_DEV && logger, // false
  IS_DEV && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // false
].filter(Boolean);

const store = createStore(
  combinedReducers,
  applyMiddleware(...middlewares),
);

// namespace

// setUser => user.authenticated
// loadFilms => films: []
// loadGenres => genres: []
// setGenre => currentGenre

// Promise.all([
//    loadData(),
//    setUser(),
// ])

const init = () => {
  store.dispatch(fetchFilms());

  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
  );
};

init();
