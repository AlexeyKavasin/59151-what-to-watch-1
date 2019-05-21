import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer";

import App from "./components/app/app.jsx";
import films from "./mocks/films.js";

const store = createStore(reducer);

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App films={films}/>
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
