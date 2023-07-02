require('dotenv').config()
const nodemailer = require("nodemailer");

const nodeMailer=async()=>{
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
         
          user: 'bilelbenammarmemni@gmail.com',
          pass: process.env.SEKRET_KEY
        }
      });
      
        const message={
          from: '"Bilel ben ammar memni👻" <bilelbenammarmemni@gmail.com>',
          to:"bilelbenammarmemni@gmail.com" , 
          subject: "Hello ✔", 
          text: "Hello world?",
          html: "<b>Hello world?</b>",
        }
       await transporter.sendMail(message,(err,info)=>{
          if (err) {
                console.log(err);
          } else {
              console.log("mailsent:"+ info.response);
          }
        });

}

module.exports={
    nodeMailer,  
}


