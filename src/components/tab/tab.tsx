import * as React from "react";
import {ITab} from "../../interfaces";

export class Tab extends React.Component<ITab, null> {
    constructor(props) {
        super(props);
        this.handleTabClick = this.handleTabClick.bind(this);
    }

    handleTabClick(event) {
        event.preventDefault();
        const {onTabClick, tabId} = this.props;
        onTabClick(event, tabId);
    }

    render() {
        const {activeTab, tabId, children} = this.props;
        return <React.Fragment>
            <li className={`movie-nav__item ${activeTab === tabId ? 'movie-nav__item--active' : ''}`}>
                <a href="#"
                className="movie-nav__link" 
                onClick={this.handleTabClick}>
                {children}
                </a>
            </li>
        </React.Fragment>
    }
}
