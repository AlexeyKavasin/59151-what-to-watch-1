import React from "react";
import PropTypes from "prop-types";
import {MovieCard} from "../movie-card/moviecard.jsx";
import {propTypes as movieCardPropTypes} from "../movie-card/moviecard.props";
import {connect} from "react-redux";
import {ALL_GENRES} from "../../redux/types";

class MovieList extends React.Component {
  render() {
    const {films, activeCard, onMouseOver, onMouseLeave} = this.props;
    return <React.Fragment>
      <div className="catalog__movies-list">
        {films.map((film, index) => {
          return <MovieCard
            name={film.name}
            poster={film.poster}
            trailer={film.trailer}
            genre={film.genre}
            key={index}
            id={film.id}
            isPlaying={activeCard === film.id}
            onMouseOver={() => onMouseOver(event, film)}
            onMouseLeave={() => onMouseLeave(event)}
          />;
        })}
      </div>
    </React.Fragment>;
  }
}

MovieList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(movieCardPropTypes)).isRequired,
  activeCard: PropTypes.number.isRequired,
  onMouseOver: PropTypes.func,
  onMouseLeave: PropTypes.func
};

const filterFilms = (films, selectedGenre) => {
  if (selectedGenre === ALL_GENRES) {
    return films;
  }

  return films.filter((film) => film.genre === selectedGenre);
};

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  currentGenre: state.currentGenre,
  genres: state.genres,
  films: filterFilms(state.films, state.currentGenre),
});

const mapDispatchToProps = () => ({});

export {MovieList};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieList);
