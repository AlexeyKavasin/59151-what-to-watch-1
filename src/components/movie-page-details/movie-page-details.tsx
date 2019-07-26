import * as React from "react";
import {connect} from "react-redux";
import {RouteProps, Redirect} from 'react-router-dom';
import {getFilmById} from "../../redux/reducer/data/selectors.js";
import {withActiveCard} from "../../hocs/with-active-card/with-active-card";
import MovieList from "../movie-list/movielist";
import {Footer} from "../footer/footer";
import {FullWidthPlayer} from "../full-width-player/full-width-player";
import {IMoviePageDetails, filmData} from "../../interfaces";
import {getUserComments} from "../../redux/reducer/actions.js";
import {Header} from "../header/header";

const MovieListWithActiveCard = withActiveCard(MovieList);

class MoviePageDetails extends React.Component<IMoviePageDetails & RouteProps, null> {

    componentDidMount() {
      this.props.loadComments && this.props.loadComments(+this.props.match.params.id);
    }

    render() {
        const {films, isFullWidthPlayerActive, toggleFullWidthPlayer, isAuthorized, userData, onSignInClick, onFavoritesChange} = this.props;
        
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
                <Header onFavoritesChange={onFavoritesChange} onSignInClick={onSignInClick} userData={userData} isAuthorized={isAuthorized} isFullWidth={true} film={film} toggleFullWidthPlayer={toggleFullWidthPlayer}/>
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

const mapDispatchToProps = (dispatch) => ({
  loadComments: (filmId) => {
    dispatch(getUserComments(filmId));
  }
});

export {MoviePageDetails};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MoviePageDetails);
