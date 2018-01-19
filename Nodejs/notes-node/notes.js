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

var addNote = (title, body) => {
	console.log(`adding ${title} ${body} `)
};

var getAll = () => {
	console.log("Getting all notes")
};

var removeNote = (title) => {
	console.log(`Removing Note ${title} `)
};

var readingNote = (title) => {
	console.log(`Reading note ${title} `);
};


module.exports = {
	// addNote: addNote si son iguales se puede poner 
	addNote,
	getAll,
	removeNote,
	readingNote
}