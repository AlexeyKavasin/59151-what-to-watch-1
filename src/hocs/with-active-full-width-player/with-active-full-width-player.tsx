import * as React from 'react';
import {Subtract} from 'utility-types';
import {IWithActiveFullWidthPlayer, IWithActiveFullWidthPlayerState} from '../../interfaces';

export const withActiveFullWidthPlayer = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, IWithActiveFullWidthPlayer>;

  class WithActiveFullWidthPlayer extends React.PureComponent<T, IWithActiveFullWidthPlayerState> {
    constructor(props) {
      super(props);
      this.state = {
        isFullWidthPlayerActive: false
      };

      this.toggleFullWidthPlayer = this.toggleFullWidthPlayer.bind(this);
    }

    toggleFullWidthPlayer() {
      this.setState({
        isFullWidthPlayerActive: !this.state.isFullWidthPlayerActive
      });
    }

    render() {
      const {isFullWidthPlayerActive} = this.state;
      return <Component
        {...this.props}
        isFullWidthPlayerActive={isFullWidthPlayerActive}
        toggleFullWidthPlayer={this.toggleFullWidthPlayer}
      />;
    }
  }

  return WithActiveFullWidthPlayer;
};
