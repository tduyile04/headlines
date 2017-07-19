import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * Protects the routes; checks if a user has been authenticated
 * before gaining access to the routes
 * @param {any} { component: Component, authenticated, ...rest }
 * @returns {component} destination if logged in || log in page if not
 */
function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => authenticated
      ? <Component {...props} />
      : <Redirect
          to={{ pathname: '/',
            state: { from: props.location } }}
          />}
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.string,
  authenticated: PropTypes.boolean,
  location: PropTypes.object
};

export default PrivateRoute;

