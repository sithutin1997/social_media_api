const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require('dotenv')
const routes = require('./app/routes/routes')

dotenv.config();

//database setup
const mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString);
const database = mongoose.connection;

//test database connection
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})


//app setup
const app = express()
const port = process.env.PORT

app.use(cors())

/**
 * Routes
 */

app.use('/api', routes);

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(port, () => {
    console.log(`Hello world server is listening on ${port}` )
})