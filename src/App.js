import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          
          <Route path='/login' component={Login} />
      
          <Route path='/sign-up' component={SignUp} />

          
          
        </Switch>
      </Router>
    </>
  );
};
export default App;
