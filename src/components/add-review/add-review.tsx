import * as React from "react";
import {connect} from "react-redux";
import {Link, RouteProps, Redirect} from "react-router-dom";
import {getFilmById} from "../../redux/reducer/data/selectors.js";
import {IAddReview, IAddReviewState} from "../../interfaces";
import {sendUserComment} from "../../redux/reducer/actions.js";

class AddReview extends React.PureComponent<IAddReview & RouteProps, IAddReviewState> {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      rating: 3
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleRatingChange(evt) {
    const {value} = evt.currentTarget;
    this.setState({
      rating: +value
    })
  }

  handleTextChange(evt) {
    const {value} = evt.currentTarget;
    this.setState({
      comment: value
    })
  }

  handleSubmit(evt) {
    const {submitComment} = this.props;
    evt.preventDefault();
    submitComment(this.state.comment, this.state.rating, +this.props.match.params.id);
  }

  render() {
    const {films, isAuthorized, userData, onSignInClick} = this.props;
    const film = getFilmById(films, +this.props.match.params.id);

    if (!film) {
      return <Redirect to="/"/>
    }

    return <React.Fragment>
      <section className="movie-card movie-card--full">
      <div className="movie-card__header">
         <div className="movie-card__bg">
            <img src={film.background_image} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link className="logo__link" to="/">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/film/${film.id}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

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

        <div className="movie-card__poster movie-card__poster--small">
          <img src={film.poster_image} alt={film.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form" onSubmit={this.handleSubmit}>
          <div className="rating">
            <div className="rating__stars">
              <input className="rating__input" id="star-1" type="radio" name="rating" value="1" onChange={this.handleRatingChange} />
              <label className="rating__label" htmlFor="star-1">Rating 1</label>

              <input className="rating__input" id="star-2" type="radio" name="rating" value="2" onChange={this.handleRatingChange} />
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input className="rating__input" id="star-3" type="radio" name="rating" value="3" onChange={this.handleRatingChange} defaultChecked />
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input className="rating__input" id="star-4" type="radio" name="rating" value="4" onChange={this.handleRatingChange} />
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input className="rating__input" id="star-5" type="radio" name="rating" value="5" onChange={this.handleRatingChange} />
              <label className="rating__label" htmlFor="star-5">Rating 5</label>
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={this.handleTextChange}></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>
    </React.Fragment>;
  }
}

const mapStateToProps = (state) => ({
  isAuthorizationRequired: state[`USER`].isAuthorizationRequired,
  isAuthorized: state[`USER`].isAuthorized,
  userData: state[`USER`].userData
});

const mapDispatchToProps = (dispatch) => ({
  submitComment: (comment, rating, filmId) => {
    dispatch(sendUserComment({comment, rating, filmId}));
  }
});
  
export {AddReview};
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddReview);
