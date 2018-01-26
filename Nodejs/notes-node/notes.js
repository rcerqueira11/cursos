console.log('Start notes.js');

// module.exports.age = 25;
// module.exports.add = (num1, num2) => {
// 	console.log('add');
// 	return num1 + num2;
// };

// module.exports.addNote = () => {
// 	console.log('add');
// 	return 'New note';
// };

const fs = require('fs');

var fetchNotes = () => {

	try {
		var notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	} catch (error) {
		return [];
	}

};

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
	// console.log(`adding ${title} ${body} `)
	var notes = fetchNotes();
	var note = {
		title,
		body
	};

	// try {
	// 	var notesString = fs.readFileSync('notes-data.json');
	// 	notes = JSON.parse(notesString);
	// } catch (error) {

	// }

	// var duplicateNotes = notes.filter((note) => {
	// 	return note.title === tilte;
	// });
	
	// valid in ES6
	// var duplicateNotes = notes.filter((note) => note.title === title);

	// if(duplicateNotes.length === 0){
	// 	notes.push(note);
	// 	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
	// }

	var duplicateNotes = notes.filter((note) => note.title === title);
	
	if(duplicateNotes.length === 0){
		notes.push(note);
		saveNotes(notes);
		return note;
	}

};

var getAll = () => {
	console.log("Getting all notes")
	var notes = fetchNotes();
	notes.filter((note)=> logNote(note));
};

var removeNote = (title) => {
	console.log(`Removing Note ${title} `)
	var notes = fetchNotes();
	var notesFiltered = notes.filter((note) => note.title !== title);
	saveNotes(notesFiltered);
	// true if note was remove
	// false if it was NOT remove
	return notes.length !== notesFiltered.length;
};

var readingNote = (title) => {
	console.log(`Reading note ${title} `);
	var notes = fetchNotes();
	var noteFiltered = notes.filter((note) => note.title === title);
	return noteFiltered[0];
};

var logNote = (note) => {
	debugger;
	console.log("----");
	console.log(`Title: ${note.title}`);
	console.log(`Body: ${note.body}`);
}

module.exports = {
	// addNote: addNote si son iguales se puede poner 
	addNote,
	getAll,
	removeNote,
	readingNote,
	logNote
}