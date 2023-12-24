import React, { useEffect } from 'react'
import "./app.css"
import Home from './components/home/Home'
import {BrowserRouter,Routes,Route} from "react-router-dom" 
import Post from './components/posts/Post'
import PostDetail from './components/posts/PostDetail'
import Header from './components/header/Header'
import {useDispatch, useSelector} from "react-redux"
import { getProfileAction } from './components/redux/actions/user'
import Login from './components/login/Login'
import SignUp from './components/register/Register'
import Profile from './components/profile/Profile'

const App = () => {
  
  const dispatch = useDispatch()
  const {isAuthenticated} = useSelector(state=>state.user) 
  
  
  useEffect(() => {
     dispatch(getProfileAction()) 
  }, [dispatch,isAuthenticated])


  return (
     <BrowserRouter>
       <Header/>
       <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/posts" element={<Post/>}/> 
           <Route path="/post/:id" element={<PostDetail/>}/> 
           <Route path="/login" element={<Login/>}/> 
           <Route path="/login" element={<Login/>}/> 
           <Route path="/signup" element={<SignUp/>}/> 
           <Route path="/profile" element={<Profile/>}/> 
       </Routes>
    </BrowserRouter>
  )
}

export default App