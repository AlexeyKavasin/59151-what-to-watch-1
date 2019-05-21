import React from "react";
import PropTypes from "prop-types";
import {propTypes as movieCardPropTypes} from "../movie-card/moviecard.props";
import { GenresList } from "../genres-list/genreslist.jsx";
import { MovieList } from "../movie-list/movielist.jsx";

export class Catalog extends React.PureComponent {
  render() {
    return (
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenresList films={this.props.films} onGenreChange={this.props.onGenreChange}/>
        <MovieList films={this.props.films}/>
        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>
    );
  }
}

Catalog.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(movieCardPropTypes)).isRequired,
  onGenreChange: PropTypes.func
};
