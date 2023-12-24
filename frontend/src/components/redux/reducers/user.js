import { createReducer } from "@reduxjs/toolkit";


export const userAuthReducer = createReducer({},{
    // login
    loginRequest:(state)=>{
          state.loding=true
          state.isAuthenticated=false;
    },

    loginSuccess:(state,action)=>{
         state.loading = false 
         state.message= action.payload 
         state.isAuthenticated=true; 
    },

    loginFail:(state,action)=>{
          state.loading=false;
          state.isAuthenticated=false;
          state.error = action.payload 
    },

    // register 
    registerRequest:(state)=>{
       state.loading=true
       state.isAuthenticated=false;
    },

    registerSuccess:(state,action)=>{
       state.loading = false;
       state.isAuthenticated=true;
       state.message=action.payload;
    },

    registerFail:(state,action)=>{
       state.loading=false;
       state.isAuthenticated=false;
       state.error = action.payload 
    },



    // get profile 
    profileRequest:(state)=>{
        state.loading=true;
    },

    profileSuccess:(state,action)=>{
       state.loading=false;
       state.user=action.payload;
       state.isAuthenticated=true;
    },

    profileFail:(state,action)=>{
       state.loading=false;
       state.isAuthenticated=false;
       state.error=action.payload 
    },


    // update profile 
    updateProfileRequest:(state)=>{
        state.loading=true;
    } ,

    updateProfileSuccess:(state,action)=>{
       state.loading=false;
       state.isAuthenticated=true;
       state.message= action.payload 
    },

    updateProfileFail:(state,action)=>{
       state.loading=false;
       state.isAuthenticated=true;
       state.error = action.payload 
    },

    // update password 
    updatePasswordRequest:(state)=>{
        state.loading=true;
    },
    updatePasswordSuccess:(state,action)=>{
        state.loading=false;
        state.isAuthenticated=true;
        state.message = action.payload 
    },
    updatePasswordFail:(state,action)=>{
       state.loading=false;
       state.isAuthenticated=true;
       state.error = action.payload
    },

    // forgot password 
    forgotPasswordRequest:(state)=>{
        state.loading=true;
        state.isAuthenticated=false;
    },

    forgotPasswordSuccess:(state,action)=>{
       state.loading=false;
       state.message=action.payload;
    },

    forgotPasswordFail:(state,action)=>{
      state.loading=false;
      state.error=action.payload;
    },

    // reset password 
    resetPasswordRequest:(state)=>{
       state.loading=true;
    },
    resetPasswordSuccess:(state,action)=>{
       state.loading=false;
       state.message=action.payload;
    },
    resetPasswordFail:(state,action)=>{
       state.loading=false;
       state.error = action.payload 
    },

    // logout user 
    logoutRequest:(state)=>{
        state.loading=true;
    },
    logoutSuccess:(state,action)=>{
       state.loading=false;
       state.message=action.payload;
       state.isAuthenticated=false;
       state.user = null;
    },

    logoutFail:(state,action)=>{
      state.loading=false;
      state.error=action.payload;
      state.isAuthenticated=true;
    },

   // update profile picture 
    updateProfileImageRequest:(state)=>{
       state.loading=true;
    },

    updateProfileImageSuccess:(state,action)=>{
         state.loading=false;
         state.message=action.payload
    },
    updateProfileImageFail:(state,action)=>{
         state.loading=false;
         state.error=action.payload
    },

     clearError:(state)=>{
         state.error=null
     },

    clearMessage:(state)=>{
         state.message=null 
    }

})