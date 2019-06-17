import * as React from "react";
import {VideoPlayer} from "../videoplayer/videoplayer";
import {IMovieCard} from "../../interfaces";

export class MovieCard extends React.PureComponent<IMovieCard, null> {
  constructor(props) {
    super(props);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseOver(event) {
    const {onMouseOver, id} = this.props;
    onMouseOver(event, id);
  }

  handleMouseLeave() {
    const {onMouseLeave} = this.props;
    onMouseLeave();
  }

  render() {
    const {name, poster, trailer, id, isPlaying} = this.props;
    return <React.Fragment>
      <article className="small-movie-card catalog__movies-card" data-id={id} onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
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
