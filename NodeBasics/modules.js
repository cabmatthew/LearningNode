// Relative path to desired item
// 'Requiring' or importing people to modules
// Node finds the file
// CommonJS imports
const { people, people2 } = require('./people');

// ES6 imports
// import { people, people2 } from './people.js';

// console.log("Modules.js: ", bleh.people, "\nPeople2: ", bleh.people2);

const os = require('os');
console.log("Platform: ", os.platform());
console.log("Homedir: ", os.homedir());