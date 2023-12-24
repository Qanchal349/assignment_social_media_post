const Post = require("../models/post")
const catchAsyncError = require("../middleware/catchAsyncError")
const User = require("../models/user");
const ErrorHandler = require("../utils/errorHandler");
const  mongoose  = require("mongoose");
const ApiFeatures = require("../utils/searchFeature");


 exports.createNewPost = catchAsyncError(async(req,res)=>{

    const {post} = req.body;
    const newPost = await Post.create({post,owner:req.user._id})
    const user =  await User.findById(req.user._id) 
    user.posts.push(newPost);
    await user.save();
     
    res.status(201).json({
        success:true,
        message:"Post created successfully" ,
    })

})

// get all posts 
exports.allPosts = catchAsyncError(async(req,res)=>{
      const apifeature = new ApiFeatures(Post.find().populate("owner","name email"),req.query).search();
      const posts = await apifeature.query;
      res.status(200).json({
        success:true,
        posts
    })
})


// Get own all posts
exports.getOwnPosts = catchAsyncError(async(req,res)=>{
     const posts = await Post.find({owner:req.user._id}).populate("owner","name email") 
     res.status(200).json({
        success:true,
        posts
    })
})


// get all posts any user 
exports.getSigleUserAllPost = catchAsyncError(async(req,res)=>{
     const posts = await Post.find({owner:req.params.id}).populate("owner","name email");
     res.status(200).json({
        success:true,
        posts
    })
})

// get post by id
exports.getPostById = catchAsyncError(async(req,res)=>{
    const post = await Post.findById(req.params.id).populate("owner","name email");
    res.status(200).json({
       success:true,
       post
   })
})


// create comment 
exports.createComment = catchAsyncError(async(req,res)=>{
    
     

     const post = await Post.findById(req.params.id)
     if(!post)
       return next(new ErrorHandler("Post not Found",404))

     // check user already commented or not 
     const isComment = post.comments.find((comm)=>comm.user.toString()===req.user._id.toString())  

     if(isComment){
          post.comments.forEach((comts)=>{
              if(comts.user.toString()===req.user._id.toString()){
                 // update comment 
                 comts.comment=req.body.comment
              }
          })
     }else{
            post.comments.push({comment:req.body.comment,
            name:req.user.name,
            user:req.user._id})
     }

     await post.save();
     res.status(200).json({
        success:true,
        message:"Comment Posted successfully"
    })
})


