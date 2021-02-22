import firebase from 'firebase/app';
import 'firebase/auth';

export const AuthProvider = {
  isAuthenticated: false,
  authenticate() {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('email');
    firebase.auth().signInWithRedirect(provider);
  },
  signout() {
    firebase.auth().signOut();
  }
};