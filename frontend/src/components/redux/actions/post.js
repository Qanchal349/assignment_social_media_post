import axios from 'axios' 


export const postAction = (keyword="") => async(dispatch)=>{
    
    try {
         dispatch({type:"postRequest"})
          const {data} = await axios.get(`/api/v1/post?keyword=${keyword}`)
         dispatch({type:'postSuccess',payload:data.posts})

    } catch (error) { 
       dispatch({type:'postFail',payload:error.response.data.error})   
    }

}

 // get all post of a user with id
export const allPostUser = (id) => async(dispatch)=>{
    
    try {
         console.log("hello") 
         dispatch({type:"allPostUserRequest"})
         
         const {data} = await axios.get(`/api/v1/post/user/${id}`)
         dispatch({type:'allPostUserSuccess',payload:data.posts})

    } catch (error) { 
       dispatch({type:'allPostUserFail',payload:error.response.data.error})   
    }

}


 // get all post loggedIn User
 export const getAllPostLoggedIn = () => async(dispatch)=>{
    
    try {
        
         dispatch({type:"loggedInUserRequest"})
         
         const {data} = await axios.get(`/api/v1/post/me`)
         dispatch({type:'loggedInUserSuccess',payload:data.posts})

    } catch (error) { 
       dispatch({type:'loggedInUserFail',payload:error.response.data.error})   
    }

}


 // create new Post 
 export const createNewPost = (post) => async(dispatch)=>{
    
   try {
       
        dispatch({type:"createNewPostRequest"})
        console.log(post)
        const {data} = await axios.post(`/api/v1/post`,{post},{
         headers:{
            'Content-Type':'application/json'
         }
        })
        dispatch({type:'createNewPostSuccess',payload:data.message})

   } catch (error) { 
      dispatch({type:'createNewPostFail',payload:error.response.data.error})   
   }

}


 //  get post by Id 
 export const getPostById = (id) => async(dispatch)=>{
    
   try {
       
        dispatch({type:"getPostByIdRequest"})
        const {data} = await axios.get(`/api/v1/post/${id}`)
        dispatch({type:'getPostByIdSuccess',payload:data.post})

   } catch (error) { 
      dispatch({type:'getPostByIdFail',payload:error.response.data.error})   
   }

}


 //  create new comment
 export const newComment = (id,comment) => async(dispatch)=>{
    
   try {
        console.log(comment)
        dispatch({type:"commentRequest"})
        const {data} = await axios.put(`/api/v1/post/${id}`,{comment},{
         headers:{
            'Content-Type':'application/json'
         }
        })
        dispatch({type:'commentSuccess',payload:data.message})

   } catch (error) { 
      dispatch({type:'commentFail',payload:error.response.data.error})   
   }

}