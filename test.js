var port = 1333;

var express = require('express');

var nameExists = function(req, res, next){

	if(req.query.name){
		console.log(typeof req.query.name)
		console.log("This will" + req.query.name);
		next();
	}
	else{
		res.send("What is you name");
	}

};

var say = function(req, res, next){
	res.send(" hi " + req.query.name)
};


var app = express();
app.use(nameExists);

app.get('/', nameExists, say);

app.listen(port);

console.log("This will show http://192.168.33.33:"+port);