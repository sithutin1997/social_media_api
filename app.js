const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require('dotenv')
const userRoute = require('./app/routes/user')
const postRoute = require('./app/routes/post')

dotenv.config();

//database setup
const mongoString = process.env.DATABASE_URL
mongoose.set("strictQuery", false);
mongoose.connect(mongoString);
const database = mongoose.connection;

//test database connection
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    // console.log("Database is connected")
})


//app setup
const app = express()

app.use(cors())

/**
 * Routes
 */

app.use('/api', userRoute);
app.use('/api', postRoute);

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

module.exports = app