import * as React from "react";
import {IShowMoreButton, IShowMoreButtonState} from "../../interfaces";
import {MAX_FILMS_TO_SHOW} from "../../constants/constants";

export class ShowMoreButton extends React.Component<IShowMoreButton, IShowMoreButtonState> {
    constructor(props) {
        super(props);
        this.state = {
            filmsShown: 0
        }
    }

    render() {
        const {onShowMoreClick} = this.props;
        return <React.Fragment>
            <div className="catalog__more">
                <button className="catalog__button" type="button" onClick={(evt) => {
                    evt.preventDefault();
                    onShowMoreClick(MAX_FILMS_TO_SHOW);
                }}>Show more
                </button>
            </div>
        </React.Fragment>
    }
}
