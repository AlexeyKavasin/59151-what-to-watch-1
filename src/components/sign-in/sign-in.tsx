import * as React from "react";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {sendUserData, fetchFavoriteFilms} from "../../redux/reducer/actions";
import {ISignIn, ISignInState} from "../../interfaces";
import {Footer} from "../footer/footer";
import {SvgIcons} from "../svg-icons/svg-icons";

class SignIn extends React.PureComponent<ISignIn, ISignInState> {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      isValidEmail: false,
      isValidPassword: false
    };
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  isValid(value) {
    return value.length > 0;
  }

  onEmailChange(value) {
    this.setState({
      email: value,
      isValidEmail: this.isValid(value)
    });
  }

  onPasswordChange(value) {
    this.setState({
      password: value,
      isValidPassword: this.isValid(value)
    });
  }

  render() {
    const {authorizeUser, loadUserFavorites} = this.props;

    return <React.Fragment>
      <SvgIcons/>
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>
          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form" onSubmit={(e) => {
            e.preventDefault();
            if (this.state.isValidEmail && this.state.isValidPassword) {
              authorizeUser(this.state.email, this.state.password);
              loadUserFavorites();
            }
          }}>
            <div className="sign-in__fields">
              <div className={`sign-in__field ${this.state.isValidEmail ? `` : `sign-in__field--error`}`}>
                <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email"
                  onChange={(e) => this.onEmailChange(e.target.value)} />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className={`sign-in__field ${this.state.isValidPassword ? `` : `sign-in__field--error`}`}>
                <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" autoComplete="Current password" onChange={(e) => this.onPasswordChange(e.target.value)}/>
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>

        <Footer/>
      </div>
    </React.Fragment>;
  }
}

const mapDispatchToProps = (dispatch) => ({
  authorizeUser: (email, password) => {
    dispatch(sendUserData(email, password));
  },
  loadUserFavorites: () => {
    dispatch(fetchFavoriteFilms());
  }
});

export {SignIn};

export default connect(
    null,
    mapDispatchToProps
)(SignIn);
