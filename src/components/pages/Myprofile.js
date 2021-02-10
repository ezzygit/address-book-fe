import React from 'react';
import '../../App.css';

const Myprofile = ({user}) => {
    return (
        <div className="myprofile">
            <h1> Welcome, {user.name}</h1>
        </div>
    );
};

export default Myprofile;