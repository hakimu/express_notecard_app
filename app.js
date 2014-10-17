var newrelic = require('newrelic');
var express = require('express');

var app = express();

app.use(function(req,res,next){
	res.send('Yeah, this is the notecard APP');
});
app.listen(3000);
console.log('Let the games begin...on port 3000');
