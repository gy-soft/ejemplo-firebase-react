import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ProtectedRoute } from './auth/protected-route';

import { Navigation } from './Navigation';
import { Home } from './Home';
import { About } from './About';
import { Login } from './Login';

function App() {
  return (
      <Router>
        <Navigation />
        <Switch>
          <ProtectedRoute exact path='/home'>
            <Home />
          </ProtectedRoute>
          <Route exact path='/about' component={About} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Router>
  );
}

export default App;
