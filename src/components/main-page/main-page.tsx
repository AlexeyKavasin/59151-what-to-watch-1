import * as React from "react";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import Catalog from "../catalog/catalog";
import {IApp} from "../../interfaces";
import {Footer} from "../footer/footer";
import {FullWidthPlayer} from "../full-width-player/full-width-player";

class MainPage extends React.PureComponent<IApp, null> {

  render() {
    const {filmOnTheMainPage, isAuthorized, userData, onSignInClick, isFullWidthPlayerActive, toggleFullWidthPlayer} = this.props;

    return <React.Fragment>
      {
        isFullWidthPlayerActive ?
        <FullWidthPlayer 
          videoSrc={filmOnTheMainPage.video_link}
          poster={filmOnTheMainPage.background_image}
          runTime={filmOnTheMainPage.run_time}
          toggleFullWidthPlayer={toggleFullWidthPlayer}
          filmName={filmOnTheMainPage.name}
        /> :
        <React.Fragment>
        <section className="movie-card">
        <div className="movie-card__bg">
          <img src={filmOnTheMainPage.background_image} alt={filmOnTheMainPage.name} />
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
              <Link to={`/film/${filmOnTheMainPage.id}`}>
                <img src={filmOnTheMainPage.poster_image} alt={filmOnTheMainPage.name} width="218" height="327" />
              </Link>
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{filmOnTheMainPage.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{filmOnTheMainPage.genre}</span>
                <span className="movie-card__year">{filmOnTheMainPage.released}</span>
              </p>

              <div className="movie-card__buttons">
                <button onClick={toggleFullWidthPlayer} className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">

        <Catalog/>

        <Footer/>

      </div>
      </React.Fragment>
      }
    </React.Fragment>;
  }
}

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  filmOnTheMainPage: state[`DATA`].films[9]
});

export {MainPage};

export default connect(
    mapStateToProps,
    null
)(MainPage);
