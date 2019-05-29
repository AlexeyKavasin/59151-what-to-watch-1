import React from 'react';

export const withActiveItem = (Component) => {
  class WithActiveItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeItem: null
      };
      this.setActiveItem = this.setActiveItem.bind(this);
    }

    setActiveItem(value) {
      this.setState({
        activeItem: value
      });
    }

    render() {
      return <Component
        {...this.props}
        activeItem={this.state.activeItem}
        setActiveItem={this.setActiveItem}
      />;
    }
  }

  return WithActiveItem;
};
