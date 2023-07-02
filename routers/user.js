const express=require('express')
const router=express.Router()
const { adduser ,getByIduser,getalluser,deleteuser,updateuser, add}=require('../controllers/users')

//router.post('/user',add)
router.post('/user',adduser)
router.get('/user/',getalluser)
router.get('/user/:id',getByIduser)
router.delete('/user/:id',deleteuser)
router.put('/user/:id',updateuser)

module.exports=router