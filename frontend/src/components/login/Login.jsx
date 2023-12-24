import React, { useEffect, useState } from 'react'
import "./login.css"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast' 
import { loginAction } from '../redux/actions/user'


const Login = () => {

 const dispatch = useDispatch();
 const {loading,message,error ,isAuthenticated} = useSelector(state=>state.user) 
 const navigate = useNavigate();
 const [password, setPassword] = useState() 
 const [email,setEmail] = useState();


 const submitHandler =async(e)=>{
     e.preventDefault();
     await dispatch(loginAction(email,password))
    
 }

 useEffect(() => {

  if(isAuthenticated)
     navigate('/profile')

  if(error){
     toast.error(error)
     dispatch({type:'clearError'})
  }

   if(message){
    toast.success(message)
    dispatch({type:'clearMessage'}) 
   }

 }, [dispatch,error,message,isAuthenticated])
 

  return (
      <section>
           <div className="login">
                 <p>Welcome Back</p>
                  <form onSubmit={submitHandler} >
                        
                       <div className="inputBox">
                          <label htmlFor="email">Email</label>
                          <input type="email" placeholder='abc@gmail.com' value={email} onChange={(e)=>setEmail(e.target.value)} />
                        </div> 
                      
                        <div className="inputBox">
                          <label htmlFor="password">Password</label>
                          <input type="password" placeholder='password...' value={password} onChange={(e)=>setPassword(e.target.value)} />
                        </div> 
                         
                        <div className="inputBox">
                          <p>New User ? <Link to="/signup" className='link'>Sign Up</Link> </p>
                          {/* <h6><Link to="/forgotpassword" className='link' >Forgot password</Link></h6> */}
                       </div>
                       
                        <button type='submit' disabled={loading?true:false}  >Sign In</button>
                         
                  </form>
           </div>
      </section>
  )
}

export default Login