import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/app/app.jsx";
import {Catalog} from "./components/catalog/catalog.jsx";
import {MovieList} from "./components/movie-list/movielist.jsx";
import films from "./mocks/films.js";

const init = () => {
  ReactDOM.render(
      <App>
        <Catalog>
          <MovieList
            films={films}
          />
        </Catalog>
      </App>,
      document.querySelector(`#root`)
  );
};

init();
