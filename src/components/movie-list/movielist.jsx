import React from "react";
import PropTypes from "prop-types";
import {MovieCard} from "../movie-card/moviecard.jsx";
import {propTypes as movieCardPropTypes} from "../movie-card/moviecard.props";
import {connect} from "react-redux";

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: -1
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseOver(id) {
    this.setState({
      activeCard: id
    });
  }

  handleMouseLeave() {
    this.setState({
      activeCard: -1
    });
  }

  render() {
    const {films} = this.props;
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
            isPlaying={this.state.activeCard === film.id}
            onPlayClick={this.handlePlayClick}
            onMouseOver={this.handleMouseOver}
            onMouseLeave={this.handleMouseLeave}
          />;
        })}
      </div>
    </React.Fragment>;
  }
}

MovieList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(movieCardPropTypes)).isRequired
};

const filterFilms = (films, selectedGenre) => {
  if (selectedGenre === `All genres`) {
    return films;
  }

  return films.filter((film) => film.genre === selectedGenre);
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
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
