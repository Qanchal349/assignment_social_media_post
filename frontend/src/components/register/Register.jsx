import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./register.css"
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import { registerAction } from '../redux/actions/user'



const SignUp = () => {

  
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {loading,error,message,isAuthenticated} = useSelector(state=>state.user) 

  const submitHandler=(e)=>{
      e.preventDefault();
      dispatch(registerAction(name,email,password))
  }


  useEffect(() => {
    
    if(error){
        toast.error(error);
        dispatch({type:'clearError'})
    }
    if(message){
      toast.success(message);
      dispatch({type:'clearMessage'})
    }

    if(isAuthenticated)
       navigate('/profile')
    
  }, [dispatch,error,message,isAuthenticated])
  

  return (
    <section>
    <div className="signup">
          <p> Create New Account</p>
           <form onSubmit={submitHandler} >
                 
                <div className="input">
                   <label htmlFor="name">Username</label>
                   <input type="text" placeholder='User Name' name='name' value={name} onChange={(e)=>setName(e.target.value)} />
                 </div>       

                <div className="input">
                   <label htmlFor="email">Email</label>
                   <input type="email" placeholder='abc@gmail.com' name='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                 </div> 
               
                 <div className="input">
                   <label htmlFor="password">Password</label>
                   <input type="password" placeholder='...........' name='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                 </div> 
                  
                  <p> Already a member ? <Link to="/login" className='link'>Sign In</Link> </p>

                 <button type='submit' disabled = {loading?true:false} >Sign Up</button>
                  
           </form>
    </div>
</section>
  )
}

export default SignUp