import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import "./home.css"



const Home = () => {
   
  const [name, setName] = useState() 
  const navigation = useNavigate()

  const submitHandler=(e)=>{
     e.preventDefault();
     if(name){
         navigation("/posts",{ replace: true })
     }
  } 

  return (
      <div className="homeContainer">
                 <div className="formContainer">
                  <form onSubmit={submitHandler}>
                      <input type="text" required placeholder='Enter Your Name'
                         name={name} onChange={(e)=>setName(e.target.value)}
                      />
                      <button>See All Posts </button>
                   </form>
                 </div>
      </div>
  )
}

export default Home