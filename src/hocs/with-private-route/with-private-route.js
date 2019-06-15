import React from "react";
import {Redirect} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {getAuthorizationStatus} from "../../redux/reducer/user/selectors";

export const withPrivateRoute = (Component) => {
  class WithPrivateRoute extends React.Component {
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

  WithPrivateRoute.propTypes = {
    isAuthorizationRequired: PropTypes.bool.isRequired
  };

  const mapStateToProps = (state) => ({
    isAuthorizationRequired: getAuthorizationStatus(state),
  });

  return connect(mapStateToProps)(WithPrivateRoute);
};
