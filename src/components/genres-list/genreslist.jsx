import React from "react";
import PropTypes from "prop-types";

export class GenresList extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {genres} = this.props;
    // TODO activeState
    return <React.Fragment>
      <ul className="catalog__genres-list">
        {genres.map((genre, index) => {
          return <li className={`catalog__genres-item`}
            key={`genres-item-${index}`}>
            <a href="#" className="catalog__genres-link">{genre}</a>
          </li>;
        })}
      </ul>
    </React.Fragment>;
  }
}

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string)
};
