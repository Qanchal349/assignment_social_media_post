const app  = require("./app") 
const dotenv =  require("dotenv") 
dotenv.config({path:"config.env"}) 
const database = require("./utils/database")
const cloudinary = require("cloudinary")

// connect databse 
database()


// cloudinary 
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_KEY,
    api_secret:process.env.CLOUDINARY_SECRET,
})


app.listen(process.env.PORT,()=>{
     console.log(`server is running ${process.env.PORT}`);
})

