import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ProtectedRoute } from './auth/protected-route';

import { Navigation } from './Navigation';
import { Home } from './Home';
import { About } from './About';
import { Login } from './Login';
import { AuthProvider } from './auth/auth-povider';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navigation />
        <Switch>
          <ProtectedRoute exact path='/home'>
            <Home />
          </ProtectedRoute>
          <Route exact path='/about' component={About} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
