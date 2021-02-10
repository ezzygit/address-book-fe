import React, { useState } from 'react';
import '../../App.css';
import LoginBox from '../LoginBox';

function Login({ setUser, setIsAuthenticated }) {
  return (
    <>
      <LoginBox setUser={setUser} setIsAuthenticated={setIsAuthenticated}></LoginBox>
      
    </>
  );
}

export default Login;