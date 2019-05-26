import React from "react";
import PropTypes from "prop-types";
import GenresList from "../genres-list/genreslist.jsx";
import MovieList from "../movie-list/movielist.jsx";
import {withActiveCard} from "../../hocs/with-active-card/with-active-card";

const MovieListWithActiveCard = withActiveCard(MovieList);

export default class Catalog extends React.PureComponent {
  render() {
    return (
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenresList/>
        <MovieListWithActiveCard/>
        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>
    );
  }
}

Catalog.propTypes = {
  onGenreChange: PropTypes.func
};
