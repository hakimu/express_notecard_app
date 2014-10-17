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

var Note = mongoose.model('Notecard');

var note = new Note();

note.term = 'Node.js';
note.definition = "Platform built on the Google V8 runtime";
note.subject = "Languages";
note.dateCreated = Date.now();
note.dateUpdated = Date.now();
note.save(function(err, note_Saved){
	if(err){
		throw err;
		console.log(err);
	} else {
		console.log('saved!');
	}
});

var second_note = new Note();

second_note.term = 'Ruby';
second_note.definition = "An object oriented programming language";
second_note.subject = "Languages";
second_note.dateCreated = Date.now();
second_note.dateUpdated = Date.now();
second_note.save(function(err, note_Saved){
	if(err){
		throw err;
		console.log(err);
	} else {
		console.log('saved!');
	}
});