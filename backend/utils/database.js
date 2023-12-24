const mongoose = require("mongoose")

const database = async() =>{
  
   if(mongoose.connection.readyState>=1) return  // if connected  
   await mongoose.connect(process.env.LOCAL_DB_URI.toString()).then(console.log("database connected"))
}


module.exports = database
