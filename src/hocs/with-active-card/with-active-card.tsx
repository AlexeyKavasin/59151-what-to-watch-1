import * as React from "react";
import {Subtract} from "utility-types";
import {IWithActiveCard, IWithActiveCardState} from "../../interfaces";

export const withActiveCard = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, IWithActiveCard>;

  class WithActiveCard extends React.Component<T, IWithActiveCardState> {
    constructor(props) {
      super(props);
      this.state = {
        activeCard: -1
      };
      this.handleMouseOver = this.handleMouseOver.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseOver(event, id) {
      this.setState({
        activeCard: id
      });
    }

    handleMouseLeave() {
      this.setState({
        activeCard: -1
      });
    }

    render() {
      return <Component
        {...this.props}
        activeCard={this.state.activeCard}
        onMouseOver={this.handleMouseOver}
        onMouseLeave={this.handleMouseLeave}
      />;
    }
  }

  return WithActiveCard;
};
