import React from "react";
import PropTypes from "prop-types";
import {propTypes as movieCardPropTypes} from "../movie-card/moviecard.props";
import {connect} from "react-redux";
import GenresList from "../genres-list/genreslist.jsx";
import MovieList from "../movie-list/movielist.jsx";
import {withGenres} from "../../hocs/with-genres/with-genres";

const GenresListWithGenres = withGenres(GenresList);

class Catalog extends React.PureComponent {
  render() {
    const {films} = this.props;
    return (
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenresListWithGenres films={films}/>
        <MovieList/>
        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>
    );
  }
}

Catalog.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(movieCardPropTypes)).isRequired
};

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  films: state.films,
});

const mapDispatchToProps = () => ({});

export {Catalog};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Catalog);
