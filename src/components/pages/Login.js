import React from 'react';
import '../../App.css';
import LoginBox from '../LoginBox';

function Login({ setUser }) {
  return (
    <>
      <LoginBox setUser={setUser} ></LoginBox>
      
    </>
  );
}

export default Login;