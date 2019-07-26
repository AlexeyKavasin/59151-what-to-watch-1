import * as React from "react";
import {Tab} from "../tab/tab";
import {connect} from "react-redux";
import {TabContent} from "../tab-content/tab-content";
import {ITabs, ITabsState} from "../../interfaces";

class Tabs extends React.Component<ITabs, ITabsState> {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 2
        }

        this.onTabClick = this.onTabClick.bind(this);
        this.formatDate = this.formatDate.bind(this);
    }
    
    onTabClick(evt: React.MouseEvent<HTMLElement>, tabId: number): void {
        evt.preventDefault();
        if (tabId && tabId !== this.state.activeTab) {
            this.setState({
                activeTab: tabId
            })
        }
    }

    formatDate(date: string): string {
      const d = new Date(date).getDate();
      const m = new Date(date).getMonth() + 1;
      const y = new Date(date).getFullYear();

      return [d, m, y].map((val: number) => val > 10 ? val : `0${val}`).join('.');
    }

    getRatingText(rating: number): string {
        switch(true) {
            case(rating === 10):
                return `Awesome`;
            case(rating >= 8 && rating < 10):
                return `Very good`;
            case(rating >= 5 && rating < 8):
                return `Good`;
            case(rating >= 3 && rating < 5):
                return `Normal`;
            case(rating >= 0 && rating < 3):
                return `Bad`;
            default:
                return `Sorry no rating`;
        }
    }

    render() {
        const {film, comments} = this.props;

        return (
          <React.Fragment>
            <nav className="movie-nav movie-card__nav">
              <ul className="movie-nav__list">
                <Tab
                  tabId={1}
                  activeTab={this.state.activeTab}
                  onTabClick={this.onTabClick}
                >
                  Overview
                </Tab>
                <Tab
                  tabId={2}
                  activeTab={this.state.activeTab}
                  onTabClick={this.onTabClick}
                >
                  Details
                </Tab>
                <Tab
                  tabId={3}
                  activeTab={this.state.activeTab}
                  onTabClick={this.onTabClick}
                >
                  Reviews
                </Tab>
              </ul>
            </nav>

            <TabContent tabId={1} activeTab={this.state.activeTab}>
              <div className="movie-rating">
                <div className="movie-rating__score">{film.rating}</div>
                <p className="movie-rating__meta">
                  <span className="movie-rating__level">{this.getRatingText(film.rating)}</span>
                  <span className="movie-rating__count">
                    {film.scores_count} ratings
                  </span>
                </p>
              </div>
              <div className="movie-card__text">
                <p>{film.description}</p>
                <p className="movie-card__director">
                  <strong>Director: {film.director}</strong>
                </p>
                <p className="movie-card__starring">
                  <strong>
                    Starring:
                    {film.starring
                      .map((actor: string) => actor)
                      .join(`, `)}
                  </strong>
                </p>
              </div>
            </TabContent>

            <TabContent tabId={2} activeTab={this.state.activeTab}>
              <div className="movie-card__text movie-card__row">
                <div className="movie-card__text-col">
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">
                      Director
                    </strong>
                    <span className="movie-card__details-value">
                      {film.director}
                    </span>
                  </p>
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">
                      Starring
                    </strong>
                    <span className="movie-card__details-value">
                      {film.starring
                        .map((actor: string) => actor)
                        .join(`, `)}
                    </span>
                  </p>
                </div>
                <div className="movie-card__text-col">
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">
                      Run Time
                    </strong>
                    <span className="movie-card__details-value">
                      {film.run_time}
                    </span>
                  </p>
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">
                      Genre
                    </strong>
                    <span className="movie-card__details-value">
                      {film.genre}
                    </span>
                  </p>
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">
                      Released
                    </strong>
                    <span className="movie-card__details-value">
                      {film.released}
                    </span>
                  </p>
                </div>
              </div>
            </TabContent>

            <TabContent tabId={3} activeTab={this.state.activeTab}>
              <div className="movie-card__reviews movie-card__row">
                <div className="movie-card__reviews-col">
                {comments && comments.map((comment, index) => {
                  return index % 2 === 0 ? <React.Fragment key={`comment-${index}`}>
                    <div className="review">
                      <blockquote className="review__quote">
                        <p className="review__text">
                          {comment.comment}
                        </p>

                        <footer className="review__details">
                          <cite className="review__author">
                            {comment.user.name}
                          </cite>
                          <time
                            className="review__date"
                            dateTime={comment.date}
                          >
                            {this.formatDate(comment.date)}
                          </time>
                        </footer>
                      </blockquote>

                      <div className="review__rating">{comment.rating}</div>
                    </div>
                  </React.Fragment> : null;
                })}
                </div>
                <div className="movie-card__reviews-col">
                {comments && comments.map((comment, index) => {
                  return index % 2 !== 0 ? <React.Fragment key={`comment-${index}`}>
                    <div className="review">
                      <blockquote className="review__quote">
                        <p className="review__text">
                          {comment.comment}
                        </p>

                        <footer className="review__details">
                          <cite className="review__author">
                            {comment.user.name}
                          </cite>
                          <time
                            className="review__date"
                            dateTime={comment.date}
                          >
                            {this.formatDate(comment.date)}
                          </time>
                        </footer>
                      </blockquote>

                      <div className="review__rating">{comment.rating}</div>
                    </div>
                  </React.Fragment> : null;
                })}
                </div>
              </div>
            </TabContent>
          </React.Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
  comments: state[`DATA`].comments
});

export {Tabs};

export default connect(
    mapStateToProps,
    null
)(Tabs);
