import React from "react";
import PropTypes from "prop-types";
import {propTypes as movieCardPropTypes} from "../movie-card/moviecard.props";
import films from "../../mocks/films";

export class GenresList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleGenreChange = this.handleGenreChange.bind(this);
  }

  handleGenreChange() {
    const {onGenreChange} = this.props;
    onGenreChange('Documentary', this.filterFilmsByGenre(this.props.films, `Documentary`));
  }

  render() {
    const genres = [`All genres`, ...new Set(this.props.films.map(films => films.genre))];

    // TODO handle activeState
    return <React.Fragment>
      <ul className="catalog__genres-list">
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
