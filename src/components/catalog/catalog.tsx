import * as React from "react";
import {connect} from "react-redux";
import GenresList from "../genres-list/genreslist";
import MovieList from "../movie-list/movielist";
import {ShowMoreButton} from "../show-more-button/show-more-button";
import {getCurrentGenre, getAllGenres, filterFilmsByGenre} from "../../redux/reducer/data/selectors.js";
import {withActiveCard} from "../../hocs/with-active-card/with-active-card";
import {selectGenre, showMoreFilms} from "../../redux/reducer/actions";
import {ICatalog} from "../../interfaces";
import {MAX_FILMS_TO_SHOW} from "../../constants/constants";

const MovieListWithActiveCard = withActiveCard(MovieList);

class Catalog extends React.PureComponent<ICatalog, null> {
  render() {
    const {films, genres, onGenreChange, currentGenre, onShowMoreClick} = this.props;
    return (
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenresList genres={genres} currentGenre={currentGenre} onGenreChange={onGenreChange}/>
        <MovieListWithActiveCard films={films} filmsToShow={MAX_FILMS_TO_SHOW}/>
        <ShowMoreButton onShowMoreClick={onShowMoreClick} filmsToShow={MAX_FILMS_TO_SHOW}/>
      </section>
    );
  }
}

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
  onShowMoreClick: (filmsAmount) => {
    dispatch(showMoreFilms(filmsAmount));
  }
});

export {Catalog};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Catalog);
