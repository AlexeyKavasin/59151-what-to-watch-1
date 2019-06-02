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

  handleMouseOver(event, {id}) {
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
            poster={film.preview_image}
            trailer={film.trailer}
            genre={film.genre}
            key={index}
            id={film.id}
            isPlaying={this.state.activeCard === film.id}
            onMouseOver={this.handleMouseOver}
            onMouseLeave={this.handleMouseLeave}
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
