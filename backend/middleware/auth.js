const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("./catchAsyncError");
const User = require("../models/user")

exports.isAuthenticated = catchAsyncError(async(req,res,next)=>{ 
    const {token} = req.cookies;
    if(token){
         jwt.verify(token,process.env.JWT_SECRET,async function(err,decode){
              if(err){
                return next(new ErrorHandler("Failed to authenticate Please Login",401))
              }
             req.user = await User.findById(decode.id)
             return next()
        })
    }
    else{
        return next(new ErrorHandler("Please login before access this ",401))
    }
})