import React from "react";
import PropTypes from "prop-types";

export const MovieCard = ({name, src, onPlayBtnClick, onMouseOver}) => {
  return (
    <React.Fragment>
      <article className="small-movie-card catalog__movies-card" onMouseOver={onMouseOver}>
        <button className="small-movie-card__play-btn" type="button" onClick={onPlayBtnClick}>Play</button>
        <div className="small-movie-card__image">
          <img src={src} alt={name} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{name}</a>
        </h3>
      </article>
    </React.Fragment>
  );
};

MovieCard.propTypes = {
  name: PropTypes.string.isRequired,
  onPlayBtnClick: PropTypes.func,
  onMouseOver: PropTypes.func,
  src: PropTypes.string.isRequired
};

MovieCard.defaultProps = {
  onPlayBtnClick: () => {},
  onMouseOver: () => {}
};
