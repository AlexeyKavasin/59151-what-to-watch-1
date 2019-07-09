import * as React from "react";
import {MovieCard} from "../movie-card/moviecard";
import {IMovieList} from "../../interfaces";

export default class MovieList extends React.Component<IMovieList, null> {
  render() {
    const {films, onMouseOver, onMouseLeave, activeCard, filmsToShow} = this.props;
    return <React.Fragment>
      <div className="catalog__movies-list">
        {films.slice(0, filmsToShow).map((film, index) => {
            return <MovieCard
              name={film.name}
              poster={film.preview_image}
              trailer={film.preview_video_link}
              key={index}
              id={film.id}
              isPlaying={activeCard === film.id}
              onMouseOver={onMouseOver}
              onMouseLeave={onMouseLeave}
            />;
        })}
      </div>
    </React.Fragment>;
  }
}
