import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Lander from './components/pages/Lander';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import Myprofile from './components/pages/Myprofile';
import {useAuth} from './utils/useAuth';
import Logout from "./components/Logout";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  useAuth(setIsAuthenticated);

  return (
    <>
      
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}  />
          
          <Route path='/login' render={() => <Login setUser={setUser} setIsAuthenticated={setIsAuthenticated} />}  />
      
          <Route path='/sign-up' render={() => <SignUp setUser={setUser} setIsAuthenticated={setIsAuthenticated} />} />

          <Route path='/logout' render={() => <Logout setUser={setUser} setIsAuthenticated={setIsAuthenticated} />} />

          <Route path='/myprofile' render = {() => isAuthenticated ?  <Myprofile user={user} /> : <Redirect to="/login" />} />

          <Route exact path='/mybook' render = {() => isAuthenticated ?  <Lander user={user} /> : <Redirect to="/" />} />
          
          
        </Switch>
      
    </>
  );
};
export default App;


