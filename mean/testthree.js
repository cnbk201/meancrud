var port = 1337;
var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//curl -X POST -H "Content-Type: application/json" -d '{"name": "Kevin", "email": "kevin@mitnick.com", "username": "Condor"}' 192.168.33.33:1337name/12
//curl -X POST -H "Content-Type: application/json" -d '{"name": "Kevin", "email": "kevin@mitnick.com", "username": "Condor"}' 192.168.33.33:1337home/12

// parse application/json
app.use(bodyParser.json())

    app.param('id', function(req, res, next, id){
    	req.user = id;
    	next();
    })

    app.param('name', function(req, res, next, id){
    	req.user = "name " + id;
    	next();
    })

	app.get('/name/:id', function(req, res){
	  res.send('user ' + req.user);
	});


	app.get('/home/:name', function(req, res){
	  res.send('home ' + req.user);
	});




app.listen(port);

console.log("This will show http://192.168.33.33:"+port);