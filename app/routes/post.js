const express = require('express')
const bodyParser = require('body-parser')
const {createPost, getPost, deletePost, updatePost, getPosts} = require('../controllers/PostController')

const jsonParser = bodyParser.json();

const router = express.Router();
// Create a post
router.post('/posts',jsonParser, createPost)

//Get all posts
router.get('/posts', jsonParser, getPosts)

//Get by ID Method
router.get('/posts/:id',jsonParser, getPost)

//Update by ID
router.patch('/posts/:id',jsonParser, updatePost)

//Delete by ID 
router.delete('/posts/:id',jsonParser, deletePost)

module.exports = router;