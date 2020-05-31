// dont forget: NPM init
const inquirer = require("inquirer");
require("dotenv").config();
const fs = require("fs");

// The user will be prompted for their GitHub username and other information pertaining to the project the README is for.

const questions = [
  // array of questions
  {
    type: "input",
    name: "username",
    message: "What is your Github Username?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "checkbox",
    name: "contents",
    message: "What are the contents of your project?",
    choices: ["Installation", "Usage", "Tests", "Dependency", "User Info"],
  },
  {
    type: "input",
    name: "Installation",
    message: "How does the user install your app?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the user story?",
  },
  {
    type: "input",
    name: "license",
    message: "Which license do you wish to use?",
  },
  {
    type: "input",
    name: "contributions",
    message: "Who contributed to this project?",
  },
  {
    type: "input",
    name: "tests",
    message: "Do you have visuals of your app working?",
  },
  {
    type: "input",
    name: "contact",
    message: "How do we contact developer for questions?",
    choices: ["Github Profile", "Email"],
  },
];
inquirer.prompt(questions).then((answers) => {
  response = answers;
  console.log(response);
  const markdownFile = "Markdown" + { response } + ".md";
  fs.writeFile(markdownFile, JSON.stringify(answers, null, "\n"), (err) => {
    if (err) {
      return console.log(err);
    }

    console.log("Success!");
    // where do I want the file to be place? desktop? local directiory? do I need to check?
    //create a file name fileName
    //write to file fileName the data
  });
});

/*    

// What is your User Github profile picture? [string] (image:url)
// What is your User Github email? 
*/
