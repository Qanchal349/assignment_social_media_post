import React from 'react'
import Avatar from "@material-ui/core/Avatar"
import "./comment.css"


const Comment = ({comment}) => {
  return (
       <div className="commentContainer">
            <div className="commentedUser">
                <Avatar/>
                <p>{comment.name}</p>
            </div>
            <p>{comment.comment}</p>
       </div>
  )
}

export default Comment