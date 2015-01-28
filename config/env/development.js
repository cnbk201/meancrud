// init port
var port = 1337;

// init module with port and mongo url
module.exports = {
	port: port,
	db: 'mongodb://localhost/todos'
};