import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthProvider } from './auth/auth-povider';

import { Navigation } from './Navigation';
import { Home } from './Home';
import { About } from './About';
import { Login } from './Login';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
