
// getting config.js file and mongose module
var config = require('./config'),
	mongoose = require('mongoose');

module.exports = function(){

	// connecting to mongoose
	var db = mongoose.connect(config.db);

	// requiring user model with schema
	require('../app/models/user.server.model');
	
	return db;

};