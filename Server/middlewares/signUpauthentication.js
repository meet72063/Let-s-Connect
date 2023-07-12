const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const {AuthenctionError,notFound} =require('../errors/index')

const tokenAuthentication = async (req, res, next) => {
  
  const { cookie: token } = req.cookies;
  
  if(!token){
    throw new notFound("session Expired please log in")
         
  }

  const decoded = jwt.verify(token, process.env.JWt_Secret);
 
 
  if (!decoded) {
    throw new AuthenctionError("invalid credentials ");
    
  }

  const { userId } = decoded;

  const data = await User.findOne({ _id:userId }).select("-password");
 
  req.user = decoded;
  next()
};

module.exports =tokenAuthentication;
