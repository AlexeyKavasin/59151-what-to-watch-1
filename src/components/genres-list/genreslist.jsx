import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {selectGenre, getFilmsByGenre} from "../../redux/actions";
import {propTypes as movieCardPropTypes} from "../movie-card/moviecard.props";

class GenresList extends React.PureComponent {
  render() {
    const {genres, currentGenre} = this.props;
    return <React.Fragment>
      <ul className="catalog__genres-list">
        {genres.map((genre, index) => {
          return <li
            className={`catalog__genres-item ${currentGenre === genre ? `catalog__genres-item--active` : ``}`}
            key={`genres-item-${index}`}>
            <a href="#" className="catalog__genres-link"
              onClick={(e) => {
                e.preventDefault();
                this.props.selectGenre(genre);
                this.props.getFilmsByGenre(genre);
              }}>{genre}</a>
          </li>;
        })}
      </ul>
    </React.Fragment>;
  }
}

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  currentGenre: state.currentGenre,
  films: state.films,
});

const mapDispatchToProps = {
  selectGenre,
  getFilmsByGenre
};

GenresList.propTypes = {
  currentGenre: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  films: PropTypes.arrayOf(PropTypes.shape(movieCardPropTypes)).isRequired,
  selectGenre: PropTypes.func,
  getFilmsByGenre: PropTypes.func,
};

export {GenresList};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GenresList);
