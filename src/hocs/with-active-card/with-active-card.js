import React from 'react';

export const withActiveCard = (Component) => {
  class WithActiveCard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeCard: -1
      };
      this.handleMouseOver = this.handleMouseOver.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseOver(event, {id}) {
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
        onMouseOver={this.handleMouseOver}
        onMouseLeave={this.handleMouseLeave}
        activeCard={this.state.activeCard}
      />;
    }
  }

  return WithActiveCard;
};
