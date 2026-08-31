const User=require('../models/userModel')



//login User
const loginUser=async(req,res)=>{
    res.json({msg:'Login User'})
}



//Signup User
const signupUser=async(req,res)=>{
    res.json({msg:'Signup User'})
}


module.exports={loginUser,signupUser}