import React from "react";
import PropTypes from "prop-types";
import {propTypes as movieCardPropTypes} from "../movie-card/moviecard.props";

export class GenresList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleGenreChange = this.handleGenreChange.bind(this);
  }

  componentDidMount() {
  }

  filterFilmsByGenre(films, selectedGenre) {
    if (Array.isArray(films)) {
      if (selectedGenre === `All genres`) {
        return films;
      }

      return films.filter(film => film.genre === selectedGenre);
    }
  }

  handleGenreChange() {
    const {onGenreChange} = this.props;
    onGenreChange('Documentary', this.filterFilmsByGenre(this.props.films, `Documentary`));
  }

  render() {
    const films = this.filterFilmsByGenre(this.props.films, `All genres`);
    const genres = [...new Set(films.map(films => films.genre))];

    // TODO handle activeState
    return <React.Fragment>
      <ul className="catalog__genres-list">
          <li 
            className="catalog__genres-item catalog__genres-item--active"
            key={`genres-item-all-genres`}>
            <a href="#" className="catalog__genres-link" onClick={this.handleGenreChange}>All genres</a>
          </li>
        {genres.map((genre, index) => {
          return <li 
            className={`catalog__genres-item`}
            key={`genres-item-${index}`}>
            <a href="#" className="catalog__genres-link" onClick={this.handleGenreChange}>{genre}</a>
          </li>;
        })}
      </ul>
    </React.Fragment>;
  }
}

GenresList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(movieCardPropTypes)).isRequired
};
