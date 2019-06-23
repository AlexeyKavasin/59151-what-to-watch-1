import * as React from "react";
import {Tab} from "../tab/tab";
import {TabContent} from "../tab-content/tab-content";
import {ITabs, ITabsState} from "../../interfaces";

class Tabs extends React.Component<ITabs, ITabsState> {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 2
        }

        this.onTabClick = this.onTabClick.bind(this);
    }
    
    onTabClick(evt: React.MouseEvent<HTMLElement>, tabId: number): void {
        evt.preventDefault();
        if (tabId && tabId !== this.state.activeTab) {
            this.setState({
                activeTab: tabId
            })
        }
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
        const {film} = this.props;
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
                  <div className="review">
                    <blockquote className="review__quote">
                      <p className="review__text">
                        Discerning travellers and Wes Anderson fans will
                        luxuriate in the glorious Mittel-European kitsch
                        of one of the director's funniest and most
                        exquisitely designed movies in years.
                      </p>

                      <footer className="review__details">
                        <cite className="review__author">
                          Kate Muir
                        </cite>
                        <time
                          className="review__date"
                          dateTime="2016-12-24"
                        >
                          December 24, 2016
                        </time>
                      </footer>
                    </blockquote>

                    <div className="review__rating">8,9</div>
                  </div>

                  <div className="review">
                    <blockquote className="review__quote">
                      <p className="review__text">
                        Anderson's films are too precious for some, but
                        for those of us willing to lose ourselves in
                        them, they're a delight. "The Grand Budapest
                        Hotel" is no different, except that he has added
                        a hint of gravitas to the mix, improving the
                        recipe.
                      </p>

                      <footer className="review__details">
                        <cite className="review__author">
                          Bill Goodykoontz
                        </cite>
                        <time
                          className="review__date"
                          dateTime="2015-11-18"
                        >
                          November 18, 2015
                        </time>
                      </footer>
                    </blockquote>

                    <div className="review__rating">8,0</div>
                  </div>

                  <div className="review">
                    <blockquote className="review__quote">
                      <p className="review__text">
                        I didn't find it amusing, and while I can
                        appreciate the creativity, it's an hour and 40
                        minutes I wish I could take back.
                      </p>

                      <footer className="review__details">
                        <cite className="review__author">
                          Amanda Greever
                        </cite>
                        <time
                          className="review__date"
                          dateTime="2015-11-18"
                        >
                          November 18, 2015
                        </time>
                      </footer>
                    </blockquote>

                    <div className="review__rating">8,0</div>
                  </div>
                </div>
                <div className="movie-card__reviews-col">
                  <div className="review">
                    <blockquote className="review__quote">
                      <p className="review__text">
                        The mannered, madcap proceedings are often
                        delightful, occasionally silly, and here and
                        there, gruesome and/or heartbreaking.
                      </p>

                      <footer className="review__details">
                        <cite className="review__author">
                          Matthew Lickona
                        </cite>
                        <time
                          className="review__date"
                          dateTime="2016-12-20"
                        >
                          December 20, 2016
                        </time>
                      </footer>
                    </blockquote>

                    <div className="review__rating">7,2</div>
                  </div>

                  <div className="review">
                    <blockquote className="review__quote">
                      <p className="review__text">
                        It is certainly a magical and childlike way of
                        storytelling, even if the content is a little
                        more adult.
                      </p>

                      <footer className="review__details">
                        <cite className="review__author">
                          Paula Fleri-Soler
                        </cite>
                        <time
                          className="review__date"
                          dateTime="2016-12-20"
                        >
                          December 20, 2016
                        </time>
                      </footer>
                    </blockquote>

                    <div className="review__rating">7,6</div>
                  </div>

                  <div className="review">
                    <blockquote className="review__quote">
                      <p className="review__text">
                        It is certainly a magical and childlike way of
                        storytelling, even if the content is a little
                        more adult.
                      </p>

                      <footer className="review__details">
                        <cite className="review__author">
                          Paula Fleri-Soler
                        </cite>
                        <time
                          className="review__date"
                          dateTime="2016-12-20"
                        >
                          December 20, 2016
                        </time>
                      </footer>
                    </blockquote>

                    <div className="review__rating">7,0</div>
                  </div>
                </div>
              </div>
            </TabContent>
          </React.Fragment>
        );
    }
}

export {Tabs};
