const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');


const notes = require('./notes.js');

const titleOptions = {
  describe: 'title of note',
  demand: true,
  alias: 't'
};
const bodyOption = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
}
const argv = yargs.command('add','Add a new note', {
  title: titleOptions,
  body: bodyOption
})
.command('list','List all notes')
.command('read','Read a note',{
  title: titleOptions
})
.command('remove','Remove a note',{
  title: titleOptions
})
.help()
.argv;

// var command = process.argv[2]
var command = argv._[0];

//console.log(command);
// console.log('command:'+ command);
// console.log(process.argv);
// console.log('Yargs', argv);

if( command === 'add'){
  console.log('Adding new note');
  var note = notes.addNote(argv.title, argv.body);
  if(note){
    console.log('note created');
    notes.logNote(note);
  }else{
    console.log('note title taken');
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => {
    notes.logNote(note);
  })
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if(note){
    console.log('Note found')
    notes.logNote(note);
  }else{
    console.log('Note not found')
  }

} else if (command === 'remove') {
  var note = notes.removeNote(argv.title);
  var message = note ? `note was removed`:`note not found`;
  console.log(message)
} else {
  console.log('command not recognized');
}
