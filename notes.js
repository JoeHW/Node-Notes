console.log("starting notes.js");

const fs = require('fs');

let fetchNotes = () => {
  try {
    let notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch(e) {
     return [];
    }
  };

let saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let addNote = (title,body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  };
 let duplicateNotes = notes.filter(x => x.title === title);

 if(duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
  };
};

let getAll = () => {
  console.log('Getting all notes')
};

let getNote = (title) => {
  let notes = fetchNotes();
  let noteToRead = notes.filter(x => x.title === title);
  return noteToRead[0];
};

let removeNote = (title) => {
  let notes = fetchNotes();
  let notesToKeep = notes.filter(x => x.title !== title);
  saveNotes(notesToKeep);
  return notes.length !== notesToKeep.length;
};

let logNote = (note) => {
 console.log('______');
 console.log(`Title: ${note.title}`);
 console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
