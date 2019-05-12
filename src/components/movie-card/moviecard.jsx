import React from "react";
import {propTypes, defaultProps} from "../../proptypes/moviecard.props";

export class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handlePlayClick(event) {
    const {onPlayClick, id} = this.props;
    onPlayClick(event, id);
  }

  handleMouseOver(event) {
    const {onMouseOver, id} = this.props;
    onMouseOver(event, id);
  }

  render() {
    const {name, src, id} = this.props;
    return (
      <React.Fragment>
        <article className="small-movie-card catalog__movies-card" id={id} onMouseOver={this.handleMouseOver}>
          <button className="small-movie-card__play-btn" type="button" onClick={this.handlePlayClick}>Play</button>
          <div className="small-movie-card__image">
            <img src={src} alt={name} width="280" height="175" />
          </div>
          <h3 className="small-movie-card__title">
            <a className="small-movie-card__link" href="movie-page.html">{name}</a>
          </h3>
        </article>
      </React.Fragment>
    );
  }
}

MovieCard.propTypes = propTypes;
MovieCard.defaultProps = defaultProps;
