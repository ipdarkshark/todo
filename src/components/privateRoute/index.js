import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      auth ? (
        <Component {...props} />
      ) : (
        <Redirect to="/auth" />
      )
    )}
  />
);

export default PrivateRoute;
