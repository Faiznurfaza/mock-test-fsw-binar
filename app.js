const express = require("express");
const session = require("express-session");
const Sequelize = require("sequelize");
const cors = require('cors')
const cookieParser = require('cookie-parser')

const router = require('./routes');
const bodyParser = require("body-parser");

const app = express()

app.use(cors())
app.use(session({
    secret: 'mocktest',
    saveUninitialized: false,
    resave: false
}))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(cookieParser())
app.use(router)

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})