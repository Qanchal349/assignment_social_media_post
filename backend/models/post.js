const mongoose = require("mongoose") 


const postSchema = new mongoose.Schema({
  
    post:{
         type:String,
         required:[true,"Please Enter message"]
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    comments:[
        {
            comment:{
                type:String,
                required:true
            },
            name:{
                type:String,
                required:true
            },
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"User"
            }
        }
    ],

    createdAt:{
        type:Date ,
        default:Date.now 
    }

})




module.exports = mongoose.model('Post',postSchema);