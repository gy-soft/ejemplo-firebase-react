import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import firebase from 'firebase/app';
import 'firebase/auth';
import { AuthProvider } from './auth/auth-povider';

fetch('/__/firebase/init.json').then(async response => {
  firebase.initializeApp(await response.json());
  firebase.auth().onAuthStateChanged(user => {
    AuthProvider.isAuthenticated = !!user;
  });
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
