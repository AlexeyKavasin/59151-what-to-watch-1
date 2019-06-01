import React from 'react';
import PropTypes from 'prop-types';
import {propTypes as movieCardPropTypes} from '../../components/movie-card/moviecard.props';
import {ALL_GENRES} from '../../redux/types';

export const withGenres = (Component) => {
  class WithGenres extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        genres: []
      };
      this.filterGenres = this.filterGenres.bind(this);
    }

    componentWillMount() {
      this.filterGenres(this.props.films);
    }

    filterGenres(films) {
      this.setState({
        genres: [`${ALL_GENRES}`, ...new Set(films.map((film) => film.genre))]
      });
    }

    render() {
      return <Component
        {...this.props}
        genres={this.state.genres}
      />;
    }
  }

  WithGenres.propTypes = {
    films: PropTypes.arrayOf(PropTypes.shape(movieCardPropTypes)).isRequired,
  };

  return WithGenres;
};
