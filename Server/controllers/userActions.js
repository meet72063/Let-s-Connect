const User = require('../models/userModel')
const {StatusCodes}= require('http-status-codes')
const {BadRequest}=require('../errors/index')
const bcrypt = require('bcrypt')


const editUser = async (req,res)=>{
    const {userId} = req.user
    
    const {email,firstName,lastName,password} = req.body
    if(!email||!firstName||!lastName){
        throw new BadRequest('Please Provide All the Credentials')
    }
    const user =await User.findById({_id:userId})
    
    const isCorrectPassword = await user.comparePassword(String(password))
    if(!isCorrectPassword){
        throw new BadRequest('Incorrect Password')
    }

    const salt = await bcrypt.genSalt(10)
    let x = await bcrypt.hash(String(password),salt)
    
    req.body={...req.body,password:x}
    
     await User.updateOne({_id:userId},req.body)
    const  response =await User.findById({_id:userId})
    console.log(response)
    res.status(StatusCodes.OK).json({success:true, user:response ,msg:'Profile updated Succesffully'})
}

const getUser = async(req,res)=>{
    const {userId} = req.user
    console.log(userId)
  const user = await User.findById({_id:userId})
//   console.log(user)
  res.status(StatusCodes.OK).json({success:true,user})
}



const deleteUser = async(req,res)=>{
    const {userId} = req.user
    const response = await User.findOneAndDelete({_id:userId})
    res.status(StatusCodes.OK).json({success:true,msg:'User Deleted Succesfully'})
}

module.exports = {editUser,deleteUser,getUser}