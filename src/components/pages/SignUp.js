import React, { useState } from 'react';
import '../../App.css';
import SignUpBox from '../SignUpBox';

function SignUp({ setUser }) {
  return (
    <>
      <SignUpBox setUser={ setUser } ></SignUpBox>
      
    </>
  );
}

export default SignUp;