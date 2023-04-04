const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String
  },
  detail: {
    required: true,
    type: String
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {collection: "Post"})

const Post = mongoose.model("Post",postSchema);

module.exports = Post;