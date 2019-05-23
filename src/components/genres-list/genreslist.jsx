import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {selectGenre} from "../../redux/actions";
import {propTypes as movieCardPropTypes} from "../movie-card/moviecard.props";

class GenresList extends React.PureComponent {
  render() {
    return <React.Fragment>
      <ul className="catalog__genres-list">
        <li className={`catalog__genres-item catalog__genres-item--active`}>
          <a href="#" className="catalog__genres-link" onClick={() => this.props.onGenreChange(`All genres`)}>All genres</a>
        </li>
        {this.props.genres.map((genre, index) => {
          return <li className={`catalog__genres-item`} key={`genres-item-${index}`}>
            <a href="#" className="catalog__genres-link" onClick={() => this.props.onGenreChange(genre)}>{genre}</a>
          </li>;
        })}
      </ul>
    </React.Fragment>;
  }
}

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  currentGenre: state.currentGenre,
  genres: state.genres
});

const mapDispatchToProps = (dispatch) => ({
  onGenreChange: (genre) => {
    dispatch(selectGenre(genre));
  }
});

GenresList.propTypes = {
  currentGenre: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  films: PropTypes.arrayOf(PropTypes.shape(movieCardPropTypes)).isRequired
};

export {GenresList};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenresList)
