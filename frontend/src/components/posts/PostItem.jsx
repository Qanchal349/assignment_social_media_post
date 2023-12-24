import React from 'react'
import "./postItem.css"
import {Link, useNavigate} from "react-router-dom"

const PostItem = ({id,post,allPostRequest}) => {

  const navigate = useNavigate()

  const allComments = ()=>{
     navigate(`/post/${id}`)
  }
  

  return (
      <div className="postContainer">
              <div className="postOwnerDetail"> 
                 <p>Created By: <span>{post.owner.name}</span></p>
                 <p onClick={()=>allPostRequest(post.owner)}>View All Posts</p>
              </div> 
            <Link to={`/post/${post._id}`} className='postLink' style={{textDecoration:"none"}}><h6>{post.post}</h6></Link>
            <div className="postAction">
                 <p>Created At: {post.createdAt.split("T")[0]}</p>
                 <p onClick={allComments}>View All Comments</p>
            </div>
      </div>
  )
}

export default PostItem 