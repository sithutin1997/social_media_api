const express = require('express')
const bodyParser = require('body-parser')
const {createUser, getUser, deleteUser, updateUser, getUsers} = require('../controllers/UserController')

const jsonParser = bodyParser.json();

const router = express.Router();
//Create a user
router.post('/users',jsonParser, createUser)

//Get all User
router.get('/users', jsonParser, getUsers)

//Get by ID Method
router.get('/users/:id',jsonParser, getUser)

//Update by ID
router.patch('/users/:id',jsonParser, updateUser)

//Delete by ID 
router.delete('/users/:id',jsonParser, deleteUser)

module.exports = router;