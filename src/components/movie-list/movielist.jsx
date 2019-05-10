import React from "react";
import PropTypes from "prop-types";
import {MovieCard} from "../movie-card/moviecard.jsx";

export class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: -1
    };
  }

  render() {
    const {films} = this.props;
    return (
      <div className="catalog__movies-list">
        {films.map((film, ind) => {
          return <MovieCard
            name={film.name}
            src={film.src}
            key={ind}
            onPlayBtnClick={() => {
              return this.state.activeCard;
            }}
            onMouseOver={() => {
              this.setState({
                activeCard: ind
              });
            }}
          />;
        })}
      </div>
    );
  }
}

MovieList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  })).isRequired
};

