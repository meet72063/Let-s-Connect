const User = require("../models/userModel");
const { BadRequest} = require("../errors/index");
require("express-async-errors");
const { StatusCodes } = require("http-status-codes");

const register = async (req, res) => {
  
  const { email, password, firstName, lastName } = req.body;
  if (!email || !password || !firstName) {
    throw new BadRequest("please provide credenatials");
  }
  const user = await User.create(req.body);
  const token = user.createJWt();

  res.cookie("cookie", token, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true });
  res.status(StatusCodes.CREATED).send("user has been registerd succesfully");
};

const login = async (req, res) => {

  res.status(StatusCodes.OK).json({ success: "true", data: req.user });
};

//To stay users logged in until they have Token(Cookie)
const signUp = async (req, res) => {
  res.status(StatusCodes.OK).json({ success: "true", data: req.user });
}



const loggedout = async (req, res) => {
  res.clearCookie("cookie");
  res.status(StatusCodes.OK).send("you are signed out sucessfully");
};

module.exports = { register, login, signUp, loggedout };
