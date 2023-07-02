const { nodeMailer } = require('../lib/nodemailer');
const User=require('../models/user')
const nodemailer = require("nodemailer");

exports.adduser=async(req,res)=>{
  await nodeMailer()
    data=req.body;
    usr=new User(data);
     usr.save()
     .then(
        (saved)=>{
            res.send(saved)
        }
     )
     .catch(
        (err)=>{
            res.send(err)
        }
     )

}
exports.getalluser=async(req,res)=>{
  User.find()
  .then(
      (Users)=>{
        res.send(Users)
      }
  )
  .catch(
      (err)=>{
      console.log(err);
      }
  )
}
exports.getByIduser=async(req,res)=>{
  myid=req.params.id
  User.findOne({_id:myid})
  .then(
    (User)=>{
        res.send(User)
        
    }
  )
  .catch(
    (err)=>{ 
      res.send(err)
    }
  )

}

exports.deleteuser=async(req,res)=>{
  myid=req.params.id
  User.findOneAndDelete({_id:myid})
  .then(
      (deleteUser)=>{
        res.send(deleteUser)
      }
  )
  .catch(
      (err)=>{
         res.send(err)
      }
  )

}
exports.updateuser=async(req,res)=>{
  myid=req.params.id;
  newdata=req.body;
  User.findOneAndUpdate({_id:myid},newdata)
  .then(
      (updateUser)=>{
         res.send(updateUser)
      }
  )
  .catch(
      (err)=>{
          res.send(err)
      }
  )
}
