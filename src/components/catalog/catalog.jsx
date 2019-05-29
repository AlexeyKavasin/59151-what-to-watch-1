import React from "react";
import PropTypes from "prop-types";
import GenresList from "../genres-list/genreslist.jsx";
import MovieList from "../movie-list/movielist.jsx";
import {withActiveItem} from "../../hocs/with-active-item/with-active-item";

const MovieListwithActiveItem = withActiveItem(MovieList);
const GenresListWithActiveItem = withActiveItem(GenresList);

export default class Catalog extends React.PureComponent {
  render() {
    return (
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenresListWithActiveItem/>
        <MovieListwithActiveItem/>
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
