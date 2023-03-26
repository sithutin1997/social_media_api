const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
const port = 3000

app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(port, () => {
    console.log(`Hello world server is listening on ${port}` )
})