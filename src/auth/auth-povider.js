import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);
  return loading ?
  <p>Loading...</p>
  : <AuthContext.Provider value={{ currentUser }}>
    {children}
  </AuthContext.Provider>
};