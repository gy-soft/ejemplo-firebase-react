import React from 'react';
import { Redirect } from 'react-router-dom';

export const GuardedRoute = ({ component: Component, auth, ...ret }) => {
  <Route {...rest} render={(props) => (
    auth === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
}