import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import LoginPage from "./components/LoginPage";
import FriendsHome from "./components/FriendsHome";
import LandingPage from "./components/LandingPage";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/protected">Friends</Link>
        </nav>
        <Route exact path="/" component={LandingPage} />
        <Route path='/login' component={LoginPage} />
        <PrivateRoute exact path='/protected' component={FriendsHome} />
      </div>
    </Router>
    
  );
}

export default App;
