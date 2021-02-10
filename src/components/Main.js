import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Main.css';


function Main() {
  return (
    <div className='main-container'>
     
      
      <h1>THE DIGITALISATION OF THE ADDRESS BOOK</h1>
      <p>What are you waiting for?</p>
      <div className='main-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn-o'
          buttonSize='btn-l'
        >
          DISCOVER DABOOK
        </Button> */}
        <Button
          className='btns'
          buttonStyle='btn-o'
          buttonSize='btn-l'
        >
          JOIN THE REVOLUTION <i className='fa fa-arrow-right' />
        </Button>
        
        {/* <Button
          className='btns'
          buttonStyle='btn-p'
          buttonSize='btn-l'
          onClick={console.log('hey')}
        >
          JOIN THE REVOLUTION <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}

export default Main;