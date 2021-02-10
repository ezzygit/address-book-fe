import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Lander from './components/pages/Lander';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import {useAuth} from './utils/useAuth'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState({})

  useAuth(setIsAuthenticated)


  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}  />
          
          <Route path='/login' component={Login} setUser={setUser} />
      
          <Route path='/sign-up' component={SignUp} setUser={setUser} />

          <Route exact path='/mybook' render = {() => isAuthenticated ?  <Lander user={user} /> : <Redirect to="/" />} />
          
          
        </Switch>
      </Router>
    </>
  );
};
export default App;
