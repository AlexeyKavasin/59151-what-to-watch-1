import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {selectGenre} from "../../redux/actions";
import {propTypes as movieCardPropTypes} from "../movie-card/moviecard.props";
import {ALL_GENRES} from "../../redux/types";

class GenresList extends React.PureComponent {
  render() {
    const {setActiveItem} = this.props;
    return <React.Fragment>
      <ul className="catalog__genres-list">
        <li className={`catalog__genres-item ${this.props.currentGenre === ALL_GENRES ? `catalog__genres-item--active` : ``}`}>
          <a href="#" className="catalog__genres-link"
            onClick={(e) => {
              e.preventDefault();
              setActiveItem(`All genres`);
              this.props.selectGenre(ALL_GENRES);
            }}>{ALL_GENRES}</a>
        </li>
        {this.props.genres.map((genre, index) => {
          return <li
            className={`catalog__genres-item ${this.props.currentGenre === genre ? `catalog__genres-item--active` : ``}`}
            key={`genres-item-${index}`}>
            <a href="#" className="catalog__genres-link"
              onClick={(e) => {
                e.preventDefault();
                setActiveItem(genre);
                this.props.selectGenre(genre);
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
  genres: state.genres,
  films: state.films,
});

const mapDispatchToProps = {
  selectGenre,
};

GenresList.propTypes = {
  currentGenre: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  films: PropTypes.arrayOf(PropTypes.shape(movieCardPropTypes)).isRequired,
  selectGenre: PropTypes.func,
  setActiveItem: PropTypes.func,
};

export {GenresList};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GenresList);
