import React from 'react';
import { Route, Redirect } from 'react-router-dom';


/**
 * Allows access to all users with no privacy restriction
 * @param {any} { component: Component, authenticated, ...rest }
 * @returns {component}
 */
function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
        {...rest}
        render={props => authenticated === false
        ? <Component {...props} />
        : <Redirect to="/sources" />}
    />
  );
}

PublicRoute.propTypes = {
  component: PropTypes.object,
  authenticated: PropTypes.boolean,
  location: PropTypes.object
};

export default PublicRoute;
