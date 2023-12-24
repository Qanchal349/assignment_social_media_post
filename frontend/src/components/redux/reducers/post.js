import { createReducer } from "@reduxjs/toolkit";


export const postReducer = createReducer({posts:[],post:{}},{
    // get all posts
    postRequest:(state)=>{
          state.loading=true
    },
    postSuccess:(state,action)=>{
         state.loading = false 
         state.posts= action.payload 
    },

    postFail:(state,action)=>{
          state.loading=false;
          state.error=action.payload 
    },

     clearError:(state)=>{
         state.error=null
     },

    clearMessage:(state)=>{
         state.message=null 
    },

    // get all post of a user with id
    allPostUserRequest:(state)=>{
        state.loading = true 
    },
    
    allPostUserSuccess:(state,action)=>{
        state.loading = false 
        state.posts= action.payload 
    },

    allPostUserFail:(state,action)=>{
            state.loading=false;
            state.error=action.payload 
    },

    // get loggedIn user all post or Own all Post
    loggedInUserRequest:(state)=>{
        state.loading = true 
    },
    
    loggedInUserSuccess:(state,action)=>{
        state.loading = false 
        state.posts= action.payload 
    },

    loggedInUserFail:(state,action)=>{
            state.loading=false;
            state.error=action.payload 
    },

    // create new post 
    createNewPostRequest:(state)=>{
        state.loading=true;
    },
    createNewPostSuccess:(state,action)=>{
        state.loading=false;
        state.message=action.payload 
    },
    createNewPostFail:(state,action)=>{
        state.loading=false;
        state.error=action.payload 
    },
   
    //get post by id 
       // create new post 
    getPostByIdRequest:(state)=>{
        state.loading=true;
    },
    getPostByIdSuccess:(state,action)=>{
        state.loading=false;
        state.post=action.payload 
    },
    getPostByIdFail:(state,action)=>{
        state.loading=false;
        state.error=action.payload 
    }
})



export const commentReducer = createReducer({},{
    // create new comment
    commentRequest:(state)=>{
        state.loading=true
    },
    commentSuccess:(state,action)=>{
        state.loading = false 
        state.message= action.payload 
    },

    commentFail:(state,action)=>{
            state.loading=false;
            state.error=action.payload 
    },

    clearError:(state)=>{
        state.error=null
    },

    clearMessage:(state)=>{
        state.message=null 
    },
}) 