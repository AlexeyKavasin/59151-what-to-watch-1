import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/app/app.jsx";
import {Catalog} from "./components/catalog/catalog.jsx";

const names = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`];

const init = () => {
  ReactDOM.render(
      <App>
        <Catalog
          names={names}
        />
      </App>,
      document.querySelector(`#root`)
  );
};

init();
