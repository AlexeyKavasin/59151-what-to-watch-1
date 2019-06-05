import React from "react";
import PropTypes from "prop-types";
import {MovieCard} from "../movie-card/moviecard.jsx";
import {propTypes as movieCardPropTypes} from "../movie-card/moviecard.props";
import {connect} from "react-redux";

class MovieList extends React.Component {
  render() {
    const {films, onMouseOver, onMouseLeave, activeCard} = this.props;
    return <React.Fragment>
      <div className="catalog__movies-list">
        {films.map((film, index) => {
          return <MovieCard
            name={film.name}
            poster={film.preview_image}
            trailer={film.preview_video_link}
            genre={film.genre}
            key={index}
            id={film.id}
            isPlaying={activeCard === film.id}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
          />;
        })}
      </div>
    </React.Fragment>;
  }
}

MovieList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(movieCardPropTypes)).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  currentGenre: state.currentGenre,
  films: state.films
});

const mapDispatchToProps = () => ({});

export {MovieList};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieList);
