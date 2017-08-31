const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
let command = argv._[0];

if(command === 'add'){
  let note = notes.addNote(argv.title, argv.body)
  if(note) {
     console.log('Note created!');
     notes.logNote(note);
    } else {
       console.log('Note title already exists!')};
  } else if (command === 'list') {
    let allNotes = notes.getAll();
     console.log(`Printing ${allNotes.length} note(s).`)
     allNotes.forEach(x => notes.logNote(x));
  } else if (command === 'read') {
    let note = notes.getNote(argv.title)
     if(note){
       console.log('Here is the note');
       notes.logNote(note);
     } else {
       console.log('Note not found');
    }
  } else if (command === 'remove') {
     let noteRemoved = notes.removeNote(argv.title);
     let message = noteRemoved ? 'Note removed' : 'Note not found';
      console.log(message);
  } else {
      console.log('command not recognised');
}
