const express = require("express") 
const app = express()
const cookie = require("cookie-parser")
const cors = require('cors')
const error = require("./middleware/error")


app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookie())
app.use(cors())  



// import all routes 
const user = require("./router/user") 
const post = require("./router/post")
app.use("/api/v1/",user) 
app.use("/api/v1/",post)
app.use(error)




module.exports = app; 
