import React, { useEffect, useState } from 'react'
import { SearchOutlined } from '@material-ui/icons'; 
import "./header.css"
import {Link, useLocation, useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { getProfileAction } from '../redux/actions/user';
import { postAction } from '../redux/actions/post';



const Header = () => {


  const dispatch = useDispatch()
  const {isAuthenticated,user} = useSelector(state=>state.user)
  const {pathname} = useLocation()
  const navagate = useNavigate()
  const [keyword, setKeyword] = useState("")

  useEffect(() => {
     dispatch(getProfileAction()) 
  }, [dispatch,isAuthenticated])

  const gotoProfile=()=>{
     navagate("/profile")
  }

  const submitHandler=(e)=>{
     e.preventDefault()
     dispatch(postAction(keyword))  
     setKeyword("")
  }

  const allPost=()=>{
     dispatch(postAction())
  }

  return (
      <div className="headerContainer">
           <Link to="/posts" className='link' onClick={allPost}>All Posts</Link>
            <div className="profileConatiiner"> 
                
                 <div className="searchPostContainer">
                   <form onSubmit={submitHandler}>
                      { pathname==="/posts" && <div className="searchInput">
                           <SearchOutlined/>
                           <input type="text" placeholder='Search...' value={keyword} onChange={(e)=>setKeyword(e.target.value)} />
                       </div>
                      } 
                      {/* <button type='submit'>Search</button> */}
                    </form>
                 </div>
                   
                  {isAuthenticated && user && <><p onClick={gotoProfile} className='loginLink'>{user.name}</p></>} 
                  {!isAuthenticated && <><Link to="/login" className='loginLink'>Login</Link></>}
            </div>
      </div>
  )
}

export default Header