import * as React from "react";
import {Link} from "react-router-dom";
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
        <Link to={`/film/${id}`} className="small-movie-card__image">
          <VideoPlayer trailer={trailer} poster={poster} isPlaying={isPlaying}/>
        </Link>
        <h3 className="small-movie-card__title">
          <Link to={`/film/${id}`} className="small-movie-card__link">{name}</Link>
        </h3>
      </article>
    </React.Fragment>;
  }
}
