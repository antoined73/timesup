/**
 * This is the "main file" of the project.
 * This is the file where you will declare the routes of
 * your REST application, protect routes with middleware,
 * etc...
 *
 * @author Maxime Flament
 */

let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');

let app = express();

let originsWhitelist = [
  'http://localhost:8080', //this is an example of a front-end url for development
  // add all your domains below, for example : your-domain.com, your-domain.org, etc...
];

let corsOptions = {
  origin: function(origin, callback){
    let isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
    callback(null, isWhitelisted);
  },
  credentials:true
};

//here is the magic
app.use(cors(corsOptions));

// Body parser to be able to read the json in th request
app.use(bodyParser.json());

// Load the routes
app.use('/api', require('./words/router'));
// Repeat the above line for additional model areas

// FINALLY, use any error handlers
app.use(require('./errors/not-found'));

// Export the app instance for unit testing via supertest
module.exports = app;
