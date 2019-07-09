import * as React from "react";
import {IShowMoreButton, IShowMoreButtonState} from "../../interfaces";

export class ShowMoreButton extends React.Component<IShowMoreButton, IShowMoreButtonState> {
    constructor(props) {
        super(props);
        this.state = {
            filmsShown: 0,
        }
    }

    componentDidMount() {
        const {filmsToShow} = this.props;
        this.setState({
            filmsShown: this.state.filmsShown + filmsToShow
        });
    }

    render() {
        const {filmsLength, filmsToShow, onShowMoreClick} = this.props;
        const allFilmsShown = filmsToShow >= filmsLength;

        return <React.Fragment>
            <div className="catalog__more" style={{display: allFilmsShown ? `none` : `block`}}>
                <button className="catalog__button" type="button" onClick={(evt) => {
                    evt.preventDefault();
                    onShowMoreClick(this.state.filmsShown + filmsToShow);
                }}>Show more</button>
            </div>
        </React.Fragment>
    }
}
