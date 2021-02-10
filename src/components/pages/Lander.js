import React, {useEffect, useState} from 'react';
import '../../App.css';
// import Main from '../Main';
import Record from '../Record'

const Lander = () => {
    const [posts, setPosts] = useState([]);

    const fetchRecords = async (setPosts) => {
        const response = await fetch("http://localhost:5000/records/", {
          method: "GET",
        });
        const data = await response.json();
        setPosts(data);
      };

    useEffect(() => {
        fetchRecords(setPosts);
      }, []);


  return (
    <div>
     <div className="newrecord">
        <h2>Placeholder</h2>
     </div>
     <div className="map">
        {posts.map((post, index) => {
            return <Record post={post} index={index} />
        })}
     </div>
      
    </div>
  );
}

export default Lander;