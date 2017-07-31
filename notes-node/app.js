console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');


const notes = require('./notes.js');

const argv = yargs.argv;

// var command = process.argv[2]
var command = argv._[0];

//console.log(command);
console.log('command:'+ command);
console.log(process.argv);
console.log('Yargs', argv);

if( command === 'add'){
  console.log('Adding new note');
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  notes.getAll();
  console.log('List all note');
} else if (command === 'read') {
  notes.getNote(argv.title);
  console.log('List all note');
} else {
  console.log('command not recognized');
}
