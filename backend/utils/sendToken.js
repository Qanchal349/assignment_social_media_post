const sendToken = (token,statusCode,res)=>{
    
    const options={
         expire:new Date(Date.now+process.env.COOKIE_EXPIRE_DATE*24*60*60*1000),
         httpOnly:true
    }

    res.status(statusCode).cookie("token",token,options).json({
        success:true,
        message:'Welcome Back 🎉'
    })

}
module.exports  = sendToken 