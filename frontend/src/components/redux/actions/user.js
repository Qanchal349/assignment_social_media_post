import axios from 'axios' 


export const loginAction = (email,password) => async(dispatch)=>{
    
    try {

         dispatch({type:"loginRequest"})
         const {data} = await axios.post(`/api/v1/login`,{email,password},{
              headers:{
                 'Content-Type':'application/json'
              }
         })

       dispatch({type:'loginSuccess',payload:data.message})

    } catch (error) { 
       dispatch({type:'loginFail',payload:error.response.data.error})   
    }

}


// register / signUp 
export const registerAction = (name,email,password)=> async(dispatch)=>{
        try {
           dispatch({type:'registerRequest'})
           const config = {headers:{'Content-Type':'application/json'}}
           const {data} = await axios.post(`/api/v1/register`,{name,email,password},config)
           dispatch({type:'registerSuccess',payload:data.message})
        } catch (error) {
           console.log(error.response)
           dispatch({type:'registerFail',payload:error.response.data.error}) 
        }
}



// get Profile 
export const getProfileAction = () =>async(dispatch)=>{
   try {
       dispatch({type:'profileRequest'})
       const {data} = await axios.get(`/api/v1/profile`)
       dispatch({type:'profileSuccess',payload:data.user})
   } catch (error) {
      dispatch({type:'profileFail',payload:error.response.data.error}) 
   }   
}


// update profile 
export const updateProfileRequest=(name,email) => async(dispatch)=>{
    try {
       dispatch({type:'updateProfileRequest'})
       const config = {headers:{'Content-Type':'application/json'}}
       const {data} = await axios.put(`/api/v1/update/profile`,{name,email},config)
       dispatch({type:'updateProfileSuccess',payload:data.message})
    } catch (error) {
       dispatch({type:"updateProfileFail",payload:error.response.data.error})
    } 
}



// update password 
export const updatePassword=(oldPassword,newPassword)=>async(dispatch)=>{
    try {
       dispatch({type:'updatePasswordRequest'})
       const config = {headers:{'Content-Type':'application/json'}}
       const {data}  = await axios.put(`/api/v1/update/password`,{oldPassword,newPassword},config)
       dispatch({type:'updatePasswordSuccess',payload:data.message})
    } catch (error) {
       dispatch({type:'updatePasswordFail',payload:error.response.data.error})
    }
}

// forgot password 
export const forgotPassword=(email)=>async(dispatch)=>{
     try {
       dispatch({type:'forgotPasswordRequest'})
       const config = {headers:{'Content-Type':'application/json'}}
       const {data} = await axios.post(`/api/v1/forgot/password`,{email},config)
       dispatch({type:'forgotPasswordSuccess',payload:data.message})
     }catch (error) {
       dispatch({type:'forgotPasswordFail',payload:error.response.data.error})
     }
}

// reset password 
export const resetPassword=(password,confirmPassword,token)=>async(dispatch)=>{
   try {
      dispatch({type:'resetPasswordRequest'})
      const config = {headers:{'Content-Type':'application/json'}}
      const {data} = await axios.put(`/api/v1/passwordreset/${token}`,{password,confirmPassword},config)
      dispatch({type:'resetPasswordSuccess',payload:data.message})
    }catch (error) {
      dispatch({type:'resetPasswordFail',payload:error.response.data.error})
    }
}


// logout request 
export const logoutAction=()=>async(dispatch)=>{
    try {
      dispatch({type:'logoutRequest'})
      const {data} = await axios.get(`/api/v1/logout`)
      dispatch({type:'logoutSuccess',payload:data.message})
    } catch (error) {
      dispatch({type:'logoutFail',payload:error.response.data.error})
    }
}


// update profile image 
export const updateProfileImage=(myForm)=>async(dispatch)=>{
   try {
     console.log(myForm)
     dispatch({type:'updateProfileImageRequest'})
     const config = {headers:{'Content-Type':'multipart/form-data'}}
     const {data} = await axios.put(`api/v1/updateprofileimage`,myForm,config)
     dispatch({type:'updateProfileImageSuccess',payload:data.message})
   } catch (error) {
     dispatch({type:'updateProfileImageFail',payload:error.response.data.error})
   }
}

