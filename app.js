const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require('dotenv')
dotenv.config();

const app = express()
const port = process.env.PORT

app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(port, () => {
    console.log(`Hello world server is listening on ${port}` )
})