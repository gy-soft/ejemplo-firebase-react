import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

export const LoginButton = () => {
  const login = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('email');
    firebase.auth().signInWithRedirect(provider);
  }
  return (
    <button style={styles} onClick={login}>Login</button>
  );
}

export const LogoutButton = () => {
  const logout = () => firebase.auth().signOut();
  return (
    <button style={styles} onClick={logout}>Logout</button>
  )
}

const styles = {
  backgroundColor: 'indigo',
  borderRadius: '5px 10px',
  color: 'white',
  padding: '5px 20px',
  fontWeight: 'bold'
};