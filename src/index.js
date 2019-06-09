import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import combinedReducers from "./redux/reducer/index";
import {configureAPI} from "./api.js";
import App from "./components/app/app.jsx";
import {fetchFilms} from "./redux/reducer/actions.js";

const api = configureAPI((...args) => store.dispatch(...args));

const middlewares = [
  thunk.withExtraArgument(api)
];

const store = createStore(
    combinedReducers,
    applyMiddleware(...middlewares)
);

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
