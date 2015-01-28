var express = require('express'),
	app = express(),
	port = 1337;
// indicating view folder
app.set('views', './views');
// indicating view engine
app.set('view engine', 'ejs');
// adding routes
require('./routes/index.js')(app);
require('./routes/user.js')(app);
//
app.listen(port);
module.exports = app;