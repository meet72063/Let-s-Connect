const {AuthenctionError,notFound,} =require('../errors/index')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const User = require('../models/userModel')


const AuthenctionMiddleware = async (req,res,next)=>{
    const {email,password} = req.body
   
    
    const user = await  User.findOne({email:email})
    const data = await User.findOne({email:email}).select('-password')
    
   
    if(!user){
        throw new notFound('no User with provided email please register')
    }
    // console.log("hello")
    const isMatch = await user.comparePassword(String(password))

    if(!isMatch){
        throw new AuthenctionError('Incorrect Password')
    }
    const token = user.createJWt()
 
    res.cookie("cookie",token)
    req.user = data
   next()
}


module.exports = AuthenctionMiddleware