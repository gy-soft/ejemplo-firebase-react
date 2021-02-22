import firebase from 'firebase/app';
import 'firebase/auth';

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const AuthContext = React.createContext(false);

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(false);
  const history = useHistory();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setAuthState(!!user);
      if (!!user) history.push('/home');
    });
  })
  return (
    <AuthContext.Provider value={authState}>
      {children}
    </AuthContext.Provider>
  )
}
