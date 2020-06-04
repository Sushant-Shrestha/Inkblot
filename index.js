const express = require('express');
const parser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');

// use .env file for configuration constants
require('dotenv').config();

// create connection to database
require('./handlers/dataConnector.js').connect();

// check all collections in database
// require('./collections.js');

// create an express app
const app = express();

// setup express middleware
app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

// Express session
app.use(cookieParser('oreos'));
app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true
  })
);

//route handlers
const routes = require('./handlers/router.js');
app.use('/', routes);

//serve anything else to react's index.html
app.use(express.static('client/build'));
app.get('*', (req, resp) => {
  resp.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({ error : err });
});

// Use express to listen to port
let port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log("Server now running at port= " + port);
});