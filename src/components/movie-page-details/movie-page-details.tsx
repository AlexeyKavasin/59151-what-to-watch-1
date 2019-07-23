import * as React from "react";
import {connect} from "react-redux";
import {Link, RouteProps, Redirect} from 'react-router-dom';
import {getFilmById} from "../../redux/reducer/data/selectors.js";
import {Tabs} from "../tabs/tabs";
import {withActiveCard} from "../../hocs/with-active-card/with-active-card";
import MovieList from "../movie-list/movielist";
import {Footer} from "../footer/footer";
import {FullWidthPlayer} from "../full-width-player/full-width-player";
import {IMoviePageDetails, filmData} from "../../interfaces";

const MovieListWithActiveCard = withActiveCard(MovieList);

class MoviePageDetails extends React.Component<IMoviePageDetails & RouteProps, null> {
    render() {
        const {films, isFullWidthPlayerActive, toggleFullWidthPlayer, isAuthorized, userData, onSignInClick} = this.props;
        
        const film = getFilmById(films, +this.props.match.params.id);
        const filmsLikeThis = films.filter((f: filmData) => f.genre === film.genre && f.id !== film.id).slice(0, 4);

        if (!film) {
          return <Redirect to="/"/>
        }

        return (
          <React.Fragment>
            {isFullWidthPlayerActive ? (
              <FullWidthPlayer
                videoSrc={film.video_link}
                poster={film.background_image}
                runTime={film.run_time}
                toggleFullWidthPlayer={toggleFullWidthPlayer}
                filmName={film.name}
              />
            ) : (
              <React.Fragment>
                <section
                  className="movie-card movie-card--full"
                  style={{ backgroundColor: film.background_color }}
                >
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
                          <button
                            className="btn btn--list movie-card__button"
                            type="button"
                          >
                            <svg
                              viewBox="0 0 19 20"
                              width="19"
                              height="20"
                            >
                              <use xlinkHref="#add" />
                            </svg>
                            <span>My list</span>
                          </button>
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
                        <Tabs film={film} />
                      </div>
                    </div>
                  </div>
                </section>

                <div className="page-content">
                  <section className="catalog catalog--like-this">
                    <h2 className="catalog__title">More like this</h2>
                    <MovieListWithActiveCard films={filmsLikeThis} />
                  </section>

                  <Footer />
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
  films: state[`DATA`].films,
  isAuthorizationRequired: state[`USER`].isAuthorizationRequired,
  isAuthorized: state[`USER`].isAuthorized,
  userData: state[`USER`].userData
});

export {MoviePageDetails};

export default connect(
    mapStateToProps,
    null
)(MoviePageDetails);
