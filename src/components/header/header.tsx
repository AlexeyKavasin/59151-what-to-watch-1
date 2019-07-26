import * as React from "react";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import Tabs from "../tabs/tabs";
import {IHeader} from "../../interfaces";

class Header extends React.PureComponent<IHeader, null> {
  constructor(props) {
    super(props);
    this.toggleFavorite = this.toggleFavorite.bind(this);
  }
  
  toggleFavorite(evt) {
    const {film, onFavoritesChange} = this.props;
    evt.preventDefault();
    onFavoritesChange(film);
  }

  render() {
    const {film, isFullWidth, isAuthorized, userData, onSignInClick, toggleFullWidthPlayer} = this.props;
    return <React.Fragment>
        <section 
          className={`movie-card ${isFullWidth ? 'movie-card--full' : ''}`}
          style={{ backgroundColor: film.background_color }}  
        >
        {isFullWidth ? 
          <React.Fragment>
            <div className="movie-card__hero">
                    <div className="movie-card__bg">
                      <img
                        src={film.background_image}
                        alt={film.name}
                      />
                    </div>
                    <h1 className="visually-hidden">WTW</h1>
                    <header className="page-header movie-card__head">
                      <div className="logo">
                        <Link to="/" className="logo__link">
                          <span className="logo__letter logo__letter--1">
                            W
                          </span>
                          <span className="logo__letter logo__letter--2">
                            T
                          </span>
                          <span className="logo__letter logo__letter--3">
                            W
                          </span>
                        </Link>
                      </div>
                      <div className="user-block">
                      {isAuthorized && userData ? (
                        <div className="user-block__avatar">
                          <img src={`https://es31-server.appspot.com/${userData.avatar_url}`} alt={userData.name} width="63" height="63" />
                        </div>
                      ) :
                        (<Link className="user-block__link" to="/login" onClick={onSignInClick}>Sign In</Link>)
                      }
                      </div>
                    </header>
                    <div className="movie-card__wrap">
                      <div className="movie-card__desc">
                        <h2 className="movie-card__title">
                          {film.name}
                        </h2>
                        <p className="movie-card__meta">
                          <span className="movie-card__genre">
                            {film.genre}
                          </span>
                          <span className="movie-card__year">
                            {film.released}
                          </span>
                        </p>

                        <div className="movie-card__buttons">
                          <button
                            onClick={toggleFullWidthPlayer}
                            className="btn btn--play movie-card__button"
                            type="button"
                          >
                            <svg
                              viewBox="0 0 19 19"
                              width="19"
                              height="19"
                            >
                              <use xlinkHref="#play-s" />
                            </svg>
                            <span>Play</span>
                          </button>

                          {isAuthorized && userData ? (
                            <button
                            className="btn btn--list movie-card__button"
                            type="button"
                            onClick={this.toggleFavorite}
                          >
                            <svg
                              viewBox="0 0 19 20"
                              width="19"
                              height="20"
                            >
                              {film.is_favorite ? <use xlinkHref="#in-list"></use> : <use xlinkHref="#add"></use>}
                            </svg>
                            <span>My list</span>
                          </button>
                          ) : null}
                          
                          {isAuthorized && userData ? (
                            <Link
                              to={`/reviews/add/${film.id}`}
                              href="add-review.html"
                              className="btn movie-card__button"
                            >Add review
                            </Link>
                            ) : null
                          }
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="movie-card__wrap movie-card__translate-top">
                    <div className="movie-card__info">
                      <div className="movie-card__poster movie-card__poster--big">
                        <img
                          src={film.poster_image}
                          alt={film.name}
                          width="218"
                          height="327"
                        />
                      </div>

                      <div className="movie-card__desc">
                        <Tabs film={film}/>
                      </div>
                    </div>
                  </div>
          </React.Fragment> :
          <React.Fragment>
            <div className="movie-card__bg">
              <img src={film.background_image} alt={film.name} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header movie-card__head">
              <div className="logo">
                <Link className="logo__link" to="/">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </Link>
              </div>

              <div className="user-block">
                {isAuthorized && userData ? (
                  <div className="user-block__avatar">
                    <img src={`https://es31-server.appspot.com/${userData.avatar_url}`} alt={userData.name} width="63" height="63" />
                  </div>
                ) :
                  (<Link className="user-block__link" to="/login" onClick={onSignInClick}>Sign In</Link>)
                }
              </div>
            </header>

            <div className="movie-card__wrap">
              <div className="movie-card__info">
                <div className="movie-card__poster">
                  <Link to={`/film/${film.id}`}>
                    <img src={film.poster_image} alt={film.name} width="218" height="327" />
                  </Link>
                </div>

                <div className="movie-card__desc">
                  <h2 className="movie-card__title">{film.name}</h2>
                  <p className="movie-card__meta">
                    <span className="movie-card__genre">{film.genre}</span>
                    <span className="movie-card__year">{film.released}</span>
                  </p>

                  <div className="movie-card__buttons">
                    <button onClick={toggleFullWidthPlayer} className="btn btn--play movie-card__button" type="button">
                      <svg viewBox="0 0 19 19" width="19" height="19">
                        <use xlinkHref="#play-s"></use>
                      </svg>
                      <span>Play</span>
                    </button>
                    {isAuthorized && userData ? (
                      <button
                      className="btn btn--list movie-card__button"
                      type="button"
                      onClick={this.toggleFavorite}
                    >
                      <svg
                        viewBox="0 0 19 20"
                        width="19"
                        height="20"
                      >
                        {film.is_favorite ? <use xlinkHref="#in-list"></use> : <use xlinkHref="#add"></use>}
                      </svg>
                      <span>My list</span>
                    </button>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        }
      </section>
    </React.Fragment>
  }
}

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  isAuthorized: state[`USER`].isAuthorized,
  userData: state[`USER`].userData
});

export {Header};

export default connect(
    mapStateToProps,
    null
)(Header);
