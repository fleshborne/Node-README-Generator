// dont forget: NPM init
const inquirer = require("inquirer");
require("dotenv").config();

inquirer.prompt([]);

// The user will be prompted for their GitHub username and other information pertaining to the project the README is for.

const questions = [
  // array of questions
  /*    

// What is your Project title? [string]
// What is your Description? [string]
// What is your Table of Contents? [Array:string] or an object?
// How to install: [string]
// What is your Usage?
// What is your License? "MIT"
// Who are the contributors? [Array:strings]
// What are your Tests? [string] (markdown formatted?)
// What are your Questions [Array:string]
    // What is your User Github profile picture? [string] (image:url)
    // What is your User Github email? 
    */
];

function writeToFile(fileName, data) {
  // where do I want the file to be place? desktop? local directiory? do I need to check?
  //create a file name fileName
  //write to file fileName the data
}

function init() {
  // initialize stuff that I need here
}

init();
