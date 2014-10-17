var newrelic = require('newrelic');
var express = require('express');

var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/notecard');

var Notecard = require('./models/notecard');

// app.use(function(req,res,next){
// 	res.send('Yeah, this is the notecard APP');
// });

app.get('/', function(req,res){
	res.send("The new route")
});

app.get('/notecard', function(req,res){
	Notecard.find(function(err, notecard){
		if (err)
			res.send(err);
		res.json(notecard)
	});
});

// app.use()
app.listen(3000);
console.log('Let the games begin...on port 3000');
