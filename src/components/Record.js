import React from "react";

const Record = ({ post, index }) => {
  return (
    <div key={index}>
      <h1>{post.name}</h1>
      <p>{post.email}</p>
      <p>{post.phone}</p>
    </div>
  );
};

export default Record;