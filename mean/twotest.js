var port = 1333;
var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//curl -X POST -H "Content-Type: application/json" -d '{"name": "Kevin", "email": "kevin@mitnick.com", "username": "Condor", "password": "AintNoBodyGotTimeForGoodPa$$words!!!"}' 192.168.33.33:1333

// parse application/json
app.use(bodyParser.json())

// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   console.log(req.body)
//   res.end(JSON.stringify(req.body, null, 2))
// })

    app.param('id', function(req, res, next, id){
    	req.user = id;
    	next();
    })

	app.get('/name/:id', function(req, res){
	  res.send('user ' + req.user);
	});

app.listen(port);

console.log("This will show http://192.168.33.33:"+port);