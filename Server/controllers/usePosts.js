const Post = require("../models/postsModel");
const { StatusCodes } = require("http-status-codes");
const {notFound } = require("../errors/index");

const newPost = async (req, res) => {
  const createdBy = req.user.userId;

  const response = await Post.create({ ...req.body, createdBy });
 
  res.status(StatusCodes.OK).json(response);
};

const deletePost = async (req, res) => {
  const userId = req.user.userId;
  const id = req.params.id
  

  const post = await Post.findByIdAndRemove({ createdBy: userId, _id: id });
  if (!post) {
    throw new notFound("No post with this Id");
  }
  res.status(StatusCodes.OK).json(post);
};

const EditPost = async (req, res) => {
  const userId = req.user.userId;
  const id = req.params.id;

  const post = await Post.findByIdAndUpdate(
    { createdBy: userId, _id: id },
    req.body
  );
  if (!post) {
    throw new notFound("No post with this id");
  }

  res.status(StatusCodes.OK).json(post);
};

const getAllposts = async (req,res)=>{
  
  const userId = req.user.userId;
  const posts= await Post.find({createdBy:userId})
  if (!posts) {
    throw new notFound("No post with this id");
  }

  res.status(StatusCodes.OK).json({posts,msg:'success'})
}

module.exports = { newPost, deletePost, EditPost,getAllposts };
