console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
let command = argv._[0];
console.log('Command: ', command);
console.log("Yargs", argv);


if(command === 'add'){
  let note = notes.addNote(argv.title, argv.body)
  if(note) {
     console.log('Note created!');
     console.log('______');
     console.log(`Title: ${note.title}`);
     console.log(`Body: ${note.body}`);
  } else {
     console.log('Note title already exists!')};
  } else if (command === 'list') {
     notes.getAll();
  } else if (command === 'read') {
     let note = notes.getNote(argv.title)
     let readMessage = note ? `Here is the note: ${note.title} - ${note.body}` : 'Note not found';
     console.log(`${readMessage}`);
  } else if (command === 'remove') {
     let noteRemoved = notes.removeNote(argv.title);
     let message = noteRemoved ? 'Note removed' : 'Note not found';
     console.log(message);
  } else {
     console.log('command not recognised');
}
