const PostModel = require("../models/Post")

//Get Post list
exports.getPosts = async( req, res) => {
  try {
    const posts = await PostModel.find()
    res.status(200).json(posts)
  } catch(error) {
    res.status(500).json({message: error.message})
  }
}

//Get post by Id
exports.getPost = async (req,res) => {
  const id = req.params.id
  try {
    const post = await PostModel.findById(id)
    if(post !== 0 || post.length > 0) {
      res.status(200).json(post)
    } else {
      res.status(404).json({message: "There is no post"})
    }
  } catch(error) {
    res.status(500).json({message: error.message})
  }
}

//Create post
exports.createPost = async (req, res) => {
  try {
    const user = new PostModel({
      title: req.body.title,
      detail: req.body.detail,
      userId: req.body.userId,
    })
    const response = await user.save()
    res.status(201).json(response)
  } catch(error) {
    res.status(500).json({message: error})
  } 
}

//Delete Post
exports.deletePost = async (req, res) => {
  const id = req.params.id
  try {
    // check if the user exists or not
    const foundPost = await PostModel.find({id})
    if( foundPost || foundPost.length > 0 ) {
      const response = await PostModel.findByIdAndDelete(id)
      res.status(200).json(response)
    } else {
      res.status(404).json({message: "Post does not exist!"})
    }
  } catch(error) {
    res.status(500).json({message: error})
  }
}

//Update Post
exports.updatePost = async (req, res) => {
  const id = req.params.id
  const updateData = req.body
  // check if the user exists or not
  const foundPost = await PostModel.find({id})
  try {
    if( foundPost || foundPost.length > 0) {
      const response = await PostModel.findByIdAndUpdate(id, updateData, {new : true})
      res.status(200).json(response)
    } else {
      res.status(404).json({message: "Post does not exist!"})
    }
  } catch(error) {
    res.status(400).json({message: error.message})
  }
}