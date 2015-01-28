// initializing development value
// if dev is not set then set dev
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// requireing files dev or production file with port and mongodb credits
var config = require('./config/config'),

	// getting mongoose js file
	// connecting to mongodb database
	// initializing user schema and add to mongodb
	mongoose = require('./config/mongoose'),

	// adding express.js file
	// declaring view folder and view engine
	// declaring pulbic static folder
	// also requiring index and user routers
	express = require('./config/express'),

	// intializing passport config file
	passport = require('./config/passport');


var db = mongoose(),
	app = express(),
	passport = passport();

app.listen(config.port);
module.exports = app;


console.log(process.env.NODE_ENV  + ' server running at http://localhost:' + config.port);