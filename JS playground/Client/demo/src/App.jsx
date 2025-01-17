import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [user , setUser] = useState(null)
  const [id , setId] = useState("");
  // handle input change
  const handleInputChange= (e) =>{
    setId(e.target.value);
  }

  const fetchUserData= async() =>{
    try{
      const response = await fetch(`http://localhost:3000/getUserData?id=${id}`);

      if(!response.ok){
        throw new Error("User not found");
      }

      const data = await response.json();
      setUser(data)
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div>
       <h1> Fetch & Print Tut of a User</h1>
       <input
       type ="number"
       placeholder = "Enter User ID"
       onChange={handleInputChange}
       />

       <button onClick={fetchUserData}>Click to fetch data</button>
       {user && (
  <div>
    <h2>User Data:</h2>
    <p><strong>ID:</strong> {user.id}</p>
    <p><strong>Title:</strong> {user.title}</p>
  </div>
)}
  
    </div>

  )
}

export default App
