import * as React from "react";
import {connect} from "react-redux";
import GenresList from "../genres-list/genreslist";
import MovieList from "../movie-list/movielist";
import {getCurrentGenre, getAllGenres, filterFilmsByGenre} from "../../redux/reducer/data/selectors.js";
import {withActiveCard} from "../../hocs/with-active-card/with-active-card";
import {selectGenre} from "../../redux/reducer/actions";
import {ICatalog} from "../../interfaces";

const MovieListWithActiveCard = withActiveCard(MovieList);

class Catalog extends React.PureComponent<ICatalog, null> {
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

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  currentGenre: getCurrentGenre(state),
  genres: getAllGenres(state),
  films: filterFilmsByGenre(state)
});

const mapDispatchToProps = (dispatch) => ({
  onGenreChange: (genre) => {
    dispatch(selectGenre(genre));
  }
});

export {Catalog};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Catalog);
