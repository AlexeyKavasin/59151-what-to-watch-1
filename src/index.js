import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {compose} from "recompose";
import {Provider} from "react-redux";
import combineReducers from "./redux/reducer/index";
import {configureAPI} from "./api.js";
import App from "./components/app/app.jsx";
import {fetchFilms} from "./redux/reducer/actions.js";

const api = configureAPI((...args) => store.dispatch(...args));
const store = createStore(
    combineReducers,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
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
