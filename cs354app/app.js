

const express = require('express'),
path = require('path'),
app = express(),
mysql = require('mysql'), // import mysql module
cors = require('cors'),
bodyParser = require('body-parser'),
cookieParser = require('cookie-parser'),
logger = require('morgan'),
multer = require("multer"),
upload = multer(),
indexRouter = require('./routes/index'),
usersRouter = require('./routes/users');

// setup database
db = mysql.createConnection({
host: '127.0.0.1',
user: 'root',
password: 'Thestain12!',
database: 'cs354'
})

// make server object that contain port property and the value for our server.
var server = {
port: 7777
};

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(cors());



// router user input
app.listen(server.port);
module.exports = app;


