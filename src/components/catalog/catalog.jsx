import React from "react";
import PropTypes from "prop-types";
import {propTypes as movieCardPropTypes} from "../movie-card/moviecard.props";
import {connect} from "react-redux";
import GenresList from "../genres-list/genreslist.jsx";
import MovieList from "../movie-list/movielist.jsx";
import {getCurrentGenre, getAllGenres, filterFilmsByGenre} from "../../redux/reducer/data/selectors.js";
import {withActiveCard} from "../../hocs/with-active-card/with-active-card";
import {selectGenre} from "../../redux/reducer/actions";

const MovieListWithActiveCard = withActiveCard(MovieList);

class Catalog extends React.PureComponent {
  render() {
    const {films, genres, onGenreChange, currentGenre} = this.props;
    return (
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenresList genres={genres} currentGenre={currentGenre} onGenreChange={onGenreChange}/>
        <MovieListWithActiveCard films={films}/>
        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>
    );
  }
}

Catalog.propTypes = {
  currentGenre: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape(movieCardPropTypes)).isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onGenreChange: PropTypes.func
};

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  currentGenre: getCurrentGenre(state),
  genres: getAllGenres(state),
  films: filterFilmsByGenre(state)
});

const mapDispatchToProps = (dispatch) => ({
  onGenreChange: (genre) => {
    dispatch(selectGenre(genre));
  },
});

export {Catalog};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Catalog);
