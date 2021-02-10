import React from "react";
import '../App.css';

const Record = ({ post, index }) => {
  return (
    <div className="record" key={index}>
      <h1>{post.name}</h1>
      <p>{post.email}</p>
      <p>{post.phone}</p>
    </div>
  );
};

export default Record;