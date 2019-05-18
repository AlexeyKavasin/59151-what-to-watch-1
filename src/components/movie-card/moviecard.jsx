import React from "react";
import {VideoPlayer} from "../videoplayer/videoplayer.jsx";
import {propTypes, defaultProps} from "../../proptypes/moviecard.props";

export class MovieCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseOver() {
    const {onMouseOver, id} = this.props;
    onMouseOver(id);
  }

  handleMouseLeave() {
    const {onMouseLeave} = this.props;
    onMouseLeave();
  }

  render() {
    const {name, poster, trailer, id, isPlaying} = this.props;
    return <React.Fragment>
      <article className="small-movie-card catalog__movies-card" id={id} onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
        <div className="small-movie-card__image">
          <VideoPlayer trailer={trailer} poster={poster} isPlaying={isPlaying}/>
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{name}</a>
        </h3>
      </article>
    </React.Fragment>;
  }
}

MovieCard.propTypes = propTypes;
MovieCard.defaultProps = defaultProps;
