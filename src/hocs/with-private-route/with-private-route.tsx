import * as React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {Subtract} from "utility-types";
import {getAuthorizationStatus} from "../../redux/reducer/user/selectors";
import {IWithPrivateRoute} from "../../interfaces";

export const withPrivateRoute = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, IWithPrivateRoute>;

  class WithPrivateRoute extends React.Component<T, null> {
    constructor(props) {
      super(props);
    }

    render() {
      if (this.props.isAuthorizationRequired) {
        return <Redirect to="/login"/>;
      }

      return <Component {...this.props}/>;
    }
  }

  const mapStateToProps = (state) => ({
    isAuthorizationRequired: getAuthorizationStatus(state),
  });

  return connect(mapStateToProps)(WithPrivateRoute);
};
