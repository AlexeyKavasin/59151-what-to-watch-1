import React from "react";
import PropTypes from "prop-types";
import {propTypes as movieCardPropTypes} from "../movie-card/moviecard.props";
import GenresList from "../genres-list/genreslist.jsx";
import {MovieList} from "../movie-list/movielist.jsx";

export class Catalog extends React.PureComponent {
  render() {
    const {films} = this.props;

    return (
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenresList films={films}/>
        <MovieList films={films}/>
        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>
    );
  }
}

Catalog.propTypes = {
  onGenreChange: PropTypes.func,
  films: PropTypes.arrayOf(PropTypes.shape(movieCardPropTypes)).isRequired  
};
