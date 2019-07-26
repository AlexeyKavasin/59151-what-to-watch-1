import * as React from "react";
import {connect} from "react-redux";
import {Switch, Route} from 'react-router-dom';
import SignIn from "../sign-in/sign-in";
import MainPage from "../main-page/main-page";
import Favorites from "../favorites/favorites";
import {requireAuthorization} from "../../redux/reducer/actions";
import {withPrivateRoute} from "../../hocs/with-private-route/with-private-route";
import {IApp} from "../../interfaces";
import MoviePageDetails from "../movie-page-details/movie-page-details";
import {SvgIcons} from "../svg-icons/svg-icons";
import {withActiveFullWidthPlayer} from "../../hocs/with-active-full-width-player/with-active-full-width-player";
import AddReview from "../add-review/add-review";
import {toggleUserFavourites} from "../../redux/reducer/actions.js";

const FavoritesWithPrivateRoute = withPrivateRoute(Favorites);
const MainPageWithFullWidthPlayer = withActiveFullWidthPlayer(MainPage);
const MoviePageDetailsWithFullWidthPlayer = withActiveFullWidthPlayer(MoviePageDetails);

class App extends React.PureComponent<IApp, null> {
  render() {
    return <React.Fragment>
      <SvgIcons/>
      <Switch>
        <Route path="/" exact component={() => <MainPageWithFullWidthPlayer {...this.props} />}/>
        <Route path="/login" component={SignIn}/>
        <Route path="/favorites" component={() => <FavoritesWithPrivateRoute {...this.props}/> }/>
        <Route path="/film/:id" component={(props) => <MoviePageDetailsWithFullWidthPlayer {...props} onFavoritesChange={this.props.onFavoritesChange} />}/>
        <Route path="/reviews/add/:id" component={(props) => <AddReview {...props} films={this.props.films}/> }/>
        <Route component={() => <h1>404 - Not found</h1>}/>
      </Switch>
    </React.Fragment>;
  }
}

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  films: state[`DATA`].films,
  favoriteFilms: state[`DATA`].favoriteFilms,
  isAuthorizationRequired: state[`USER`].isAuthorizationRequired,
  isAuthorized: state[`USER`].isAuthorized,
  userData: state[`USER`].userData
});

const mapDispatchToProps = (dispatch) => ({
  onSignInClick: () => {
    dispatch(requireAuthorization(true));
  },

  onFavoritesChange: (film) => {
    dispatch(toggleUserFavourites(film));
  }
});

export {App};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
