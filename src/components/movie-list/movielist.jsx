import React from "react";
import PropTypes from "prop-types";
import {MovieCard} from "../movie-card/moviecard.jsx";
import {propTypes as movieCardPropTypes} from "../../proptypes/moviecard.props";

export class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: -1
    };
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handlePlayClick(event, id) {
    this.setState({
      id
    });
  }

  handleMouseOver(event, id) {
    this.setState({
      activeCard: id
    });
  }

  render() {
    const {films} = this.props;
    return (
      <div className="catalog__movies-list">
        {films.map((film, index) => {
          return <MovieCard
            name={film.name}
            src={film.src}
            key={index}
            id={film.id}
            onPlayClick={this.handlePlayClick}
            onMouseOver={this.handleMouseOver}
          />;
        })}
      </div>
    );
  }
}

MovieList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(movieCardPropTypes)).isRequired
};

