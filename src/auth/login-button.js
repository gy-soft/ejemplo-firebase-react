import React from 'react';
import firebase from 'firebase';

export const LoginButton = () => {
  const login = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('email');
    firebase.auth().signInWithRedirect(provider);
  }
  
  return (
    <button styles={styles} onClick={login}>Login</button>
  );
}

export const LogoutButton = () => {
  const logout = () => {
    firebase.auth().signOut();
  }
  return (
    <button styles={styles} onClick={logout}>Logout</button>
  )
}

const styles = {
  backgroundColor: 'blue',
  borderRadius: '5px',
  color: 'white'
};