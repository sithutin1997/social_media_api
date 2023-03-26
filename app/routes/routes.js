const express = require('express')
const router = express.Router();
const User = require('../models/User')

//Post Method
router.post('/users', (req, res) => {
    res.send('Post API')
})

//Get all Method
router.get('/users', (req, res) => {
    res.send('Get All API')
})

//Get by ID Method
router.get('/users/:id', (req, res) => {
    res.send('Get by ID API')
})

//Update by ID Method
router.patch('/users/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/users/:id', (req, res) => {
    res.send('Delete by ID API')
})

module.exports = router;