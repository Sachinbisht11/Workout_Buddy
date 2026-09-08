import React from 'react'
const jwt=require('jsonwebtoken');
const User=require('../models/userModel')

const requireAuth = async (req, res, next) => {
    const {authentication}=req.headers;

    if(!authentication){
        return res.status(401).json({error:'Authorization token required'})
    }

    const token=authentication.split(' ')[1];

    try{
        const {_id}=jwt.verify(token,process.env.SECRET);

        req.user=await User.findOne({_id}).select('_id');
    }catch(error){
        console.log(error);
        return res.status(401).json({error:'Request is not authorised'})
    }
}

export default requireAuth
module.exports=requireAuth