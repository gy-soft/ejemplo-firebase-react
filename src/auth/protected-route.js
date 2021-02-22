import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthProvider } from './auth-povider';

export const ProtectedRoute = ({ children, ...rest }) => {
  return (
    <Route {...rest} render={() => (
      AuthProvider.isAuthenticated === false
      ? <Redirect to='/login' />
      : children
    )}/>
  )
}
