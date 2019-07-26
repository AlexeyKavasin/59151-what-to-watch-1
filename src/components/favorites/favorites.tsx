import * as React from "react";
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {Footer} from '../footer/footer';
import {IFavorites} from '../../interfaces';
import MovieList from '../movie-list/movielist';
import {withActiveCard} from '../../hocs/with-active-card/with-active-card';

const MovieListWithActiveCard = withActiveCard(MovieList);

class Favorites extends React.PureComponent<IFavorites, null> {
  render() {
    const {isAuthorized, userData, onSignInClick, favoriteFilms, filmsToShow} = this.props;

    if (!isAuthorized) {
      return <Redirect to="/login"/>
    }

    return <React.Fragment>
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <h1 className="page-title user-page__title">My list</h1>

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

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          { favoriteFilms && favoriteFilms.length ? <MovieListWithActiveCard films={favoriteFilms} filmsToShow={filmsToShow}/> : null }
        </section>

        <Footer/>
      </div>
    </React.Fragment>;
  }
}

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  favoriteFilms: state[`DATA`].favoriteFilms
});

export {Favorites};

export default connect(
    mapStateToProps,
    null
)(Favorites);
