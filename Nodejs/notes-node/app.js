console.log('Starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
        describe: "Title of note",
        demand: true,
        alias: "t"
    };

const bodyOptions = {
        describe: "body of the note",
        demand: true,
        alias: "b"
    };
// console.log(process.argv);
const argv = yargs
    .command('add', 'add a new note',{
        title: titleOptions,
        body: bodyOptions
    })
    .command('list','List all notes')
    .command('read', 'Read a note',{
        title: titleOptions
    })
    .command('remove', 'Remove a note',{
        title: titleOptions
    })
    .help()
    .argv;

var command = argv._[0];

// console.log('command', command);

if (command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if (note){
        // console.log(JSON.stringify(note));
        notes.logNote(note);
    }else {
        console.log("it already exist this title");
    }

}else if (command === 'list'){
    notes.getAll();
}else if (command === 'read'){
    var note = notes.readingNote(argv.title);
    if(note){
        // console.log(JSON.stringify(note));
        notes.logNote(note);
    } else {
        console.log("No note found")
    }
}else if (command === 'remove'){
    var removed = notes.removeNote(argv.title);
    var message = removed ? "The note was remove" : "The note was NOT remove";
    console.log(message); 
}else {
    console.log("Command not recognized ");
}