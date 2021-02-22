import React from 'react';
import { AuthProvider } from './auth-povider';

export const LoginButton = () => {
  return (
    <button style={styles} onClick={AuthProvider.authenticate}>Login</button>
  );
}

export const LogoutButton = () => {
  return (
    <button style={styles} onClick={AuthProvider.signout}>Logout</button>
  )
}

const styles = {
  backgroundColor: 'indigo',
  borderRadius: '5px 15px',
  color: 'white',
  padding: '3px 8px 3px 8px',
  fontWeight: 'bold'
};