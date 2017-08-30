console.log("starting notes.js");

let addNote = (title,body) => {
  console.log('Adding Note', title, body)
};

let getAll = () => {
  console.log('Getting all notes')
};

let getNote = (title) => {
  console.log('Getting note', title)
}

let removeNote = (title) => {
  console.log('removing note', title)
}
module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
