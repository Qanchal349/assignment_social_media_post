const nodeMailer = require("nodemailer")

const sendEmail = async({email,subject,message})=>{
     
   const transporter = nodeMailer.createTransport({
       host:"smtp.gmail.com",
       port:465,
       service:process.env.SMTP_SERVICE,
       auth:{
         user:process.env.SMTP_MAIL,
         pass:process.env.SMTP_PASSWORD
       }
   })
   const options={
       from:process.env.SMTP_MAIL, 
       to:email,
       subject,
       text:message
   }
  
 await transporter.sendMail(options) 

}

module.exports = sendEmail;