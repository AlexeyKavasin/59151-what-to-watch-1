import * as React from "react";
import {IGenresList} from "../../interfaces";

export default class GenresList extends React.PureComponent<IGenresList, null> {
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
