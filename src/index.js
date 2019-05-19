import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer";

import App from "./components/app/app.jsx";
import {Catalog} from "./components/catalog/catalog.jsx";
import {MovieList} from "./components/movie-list/movielist.jsx";

import films from "./mocks/films.js";
import genres from "./mocks/genres.js";
import {GenresList} from "./components/genres-list/genreslist.jsx";

const store = createStore(reducer);

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App>
          <Catalog>
            <GenresList genres={genres}/>
            <MovieList
              films={films}
            />
          </Catalog>
        </App>
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
