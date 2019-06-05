import React from "react";
import PropTypes from "prop-types";

export default class GenresList extends React.PureComponent {
  render() {
    const {genres, currentGenre, onGenreChange} = this.props;
    return <React.Fragment>
      <ul className="catalog__genres-list">
        {genres.map((genre, index) => {
          return <li
            className={`catalog__genres-item ${currentGenre === genre ? `catalog__genres-item--active` : ``}`}
            key={`genres-item-${index}`}>
            <a href="#" className="catalog__genres-link"
              onClick={(e) => {
                e.preventDefault();
                onGenreChange(genre);
              }}>{genre}</a>
          </li>;
        })}
      </ul>
    </React.Fragment>;
  }
}

GenresList.propTypes = {
  currentGenre: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onGenreChange: PropTypes.func
};
