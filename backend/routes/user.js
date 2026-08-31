const express=require('express');
const { signupUser, loginUser } = require('../controllers/userController');


const router=express.Router();

//login
router.post('/login',()=>{})


//signup
router.post('/signup',()=>{})

module.exports=router