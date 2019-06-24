import * as React from "react";
import {ITabContent} from "../../interfaces";

export class TabContent extends React.Component<ITabContent, null> {
    render() {
        const {activeTab, tabId, children} = this.props;
        return <React.Fragment>{activeTab === tabId ? children : null}</React.Fragment>
    }
}
