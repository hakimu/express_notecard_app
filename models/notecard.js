var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var noteCardSchema = new Schema({
	term : String,
	definition : String,
	subject : String,
	dateCreated : Date,
	dateUpdated : Date,
});

module.exports = mongoose.model('Notecard', noteCardSchema);

