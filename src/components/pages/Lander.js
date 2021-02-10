import React, {useEffect, useState} from 'react';
import '../../App.css';
// import Main from '../Main';
import Record from '../Record'

const Lander = () => {
    const [posts, setPosts] = useState([]);
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const fetchRecords = async (setPosts) => {
        const response = await fetch("http://localhost:5000/records/", {
          method: "GET",
        });
        const data = await response.json();
        setPosts(data);
      };

      const addRecord = async (e) => {
        e.preventDefault()
        
        const response = await fetch(`http://localhost:5000/records`, {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
            name: name,
            email: email,
            phone: phone,
          }),
        });

        const data = await response.json()

        let temp = [...posts]
        temp.push(data)
        setPosts(temp)
    }

    useEffect(() => {
        fetchRecords(setPosts);
      }, []);


  return (
    <div className="recordPage">
     <div className="newrecord">
        <form onSubmit={addRecord}>
            <input type="text" placeholder="Name" onChange={(event) => setName(event.target.value)}/>
            <input type="text" placeholder="Email" onChange={(event) => setEmail(event.target.value)}/>
            <input type="text" placeholder="Phone" onChange={(event) => setPhone(event.target.value)}/>
            <button> Add record </button>
        </form>
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