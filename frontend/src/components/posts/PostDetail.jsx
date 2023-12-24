import React, { useEffect, useState } from 'react'
import "./postDetail.css"
import Comment from '../comment/Comment'
import { Dialog,DialogActions,DialogContent,DialogTitle,Button } from '@material-ui/core'
import AddCircle from  "@material-ui/icons/AddCircle"
import { CircularProgress } from '@material-ui/core';
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPostById, newComment } from '../redux/actions/post'
import {toast} from "react-hot-toast"


const PostDetail = () => {

 
   const [open, setOpen] = useState(false)
   const [comment, setComment] = useState("")
   const params = useParams();
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const {post} = useSelector(state=>state.posts)
   const {isAuthenticated} = useSelector(state=>state.user) 
   const {error,message} = useSelector(state=>state.comment)
   const dialogToggle=()=>{
       setOpen(!open)
   }

   const SubmitHandler=async()=>{
     if(!isAuthenticated)
        navigate("/login")
     await dispatch(newComment(params.id,comment)) 
     dispatch(getPostById(params.id)) 
     setOpen(!open)  
   }  

   useEffect(() => {
       if(error){
         toast.error(error)
         dispatch({type:'clearError'})
       }
    
       if(message){
        toast.success(message)
        dispatch({type:'clearMessage'}) 
       }
      dispatch(getPostById(params.id))
   }, [dispatch])
   

  return (
      <>
        
         {post &&  <div className="postDetail">
              <p>{post.post}</p>
              <h6>Created By : {post.owner && <span>{post.owner.name}</span>}</h6>
              <button onClick={dialogToggle}><AddCircle/>New Comment</button>
            </div>
          }  
        

          {post && post.comments && <div className="commentsConatiner">
               {post.comments.length===0 ? (<p>No Comments</p>):(<>
                         <p>Comments</p>
                    {post.comments.map((comment,i)=>(
                        <Comment comment={comment} key={i}/>
                    ))}        
               </>)}
            </div>
         }


         <Dialog
            aria-labelledby='simple-dialog-title'
            open={open} 
            onClose={dialogToggle} 
          >
            <DialogTitle>Submit Comment</DialogTitle>
            <DialogContent className='submitDialog'>
            <textarea cols="50" rows="5" name='comment' value={comment} onChange={(e)=>setComment(e.target.value)} />
           </DialogContent>
            <DialogActions>
                <Button onClick={dialogToggle}>Cancel</Button>
                <Button color='primary' onClick={SubmitHandler}>Submit</Button>
            </DialogActions>
         </Dialog>

         
      </>
  )
}

export default PostDetail