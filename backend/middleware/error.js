const ErrorHandler = require("../utils/errorHandler");


module.exports = (err,req,res,next)=>{

    err.statusCode = err.statusCode || 500
    err.message = err.message || "Internal server error "  


   // Mongo db error --------invalid Id 
      if(err.name==="CastError"){
        const message = `Resource not found, Invalid ${err.path}`;
        err = new ErrorHandler(message,404) 
    }

    // Mongoose duplicate key error 
    if(err.code===11000){
        const message =`Duplicate ${Object.keys(err.keyValue)} entered `
        err = new ErrorHandler(message,404) 
    }

    // validation error
    if(err.name==='ValidationError'){
        err.message=Object.values(err.errors).map((value)=>value.message)  
        err.statusCode=400
    }


    if(err.name==="JsonWebTokenError"){
        const message =`Json web token is invalid, try again`
        err = new ErrorHandler(message,404) 
     }

     // JWT expire error 
     if(err.code==="TokenExpiredError"){
        const message =`Json web token has Expired, try again`
        err = new ErrorHandler(message,404) 
    }

    res.status(err.statusCode).json({
        success:false,
        error:err.message
    })

}