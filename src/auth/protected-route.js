import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from './auth-povider';

export const ProtectedRoute = ({ children, ...rest }) => (
  <AuthContext.Consumer>
    { value => (
      <Route {...rest} render={() => (
        value === false ? <Redirect to='/login' /> : children
      )} />
    )}
  </AuthContext.Consumer>
)
