var express = require('express');
var app = express();
var mongo = require('mongoose');
//
var Schema = mongo.Schema;
var ObjectId = Schema.ObjectId;
var Factory = require("./module.factory.js")
//
// monogodb 
mongo.connect("mongodb://localhost/meapp");
var db = mongo.connection;
//

var factory = new Factory(Schema, mongo);
factory.createSchemas();
factory.insertPeople();

//
db.on('error', function(){
	console.log("Connection error");
});

db.once('open', function(){
	console.log("Mongo working");
});


//
// getting routes
app.get('/ping', function (req, res){
	res.send({ping: 'hellow this is server'});
});

// with id
app.get('/ping/:id', function(req, res){
	res.send({ping:" param " + req.params.id});
});

// add person
app.get('person/hektor', function(req, res){
	var resp = factory.getPerson({name:'hektor'}, res);
});

app.listen(1337);
console.log("Server is running");