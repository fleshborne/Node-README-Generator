// dont forget: NPM init
const inquirer = require("inquirer");
require("dotenv").config();
const fs = require("fs");
const markdownFormat = require("./utils/generateMarkdown");

// The user will be prompted for their GitHub username and other information pertaining to the project the README is for.

const questions = [
  // array of questions
  {
    type: "input",
    name: "username",
    message: "What is your Github Username?",
    default: "Fleshborne",
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project",
    default: "app to generate readme markdown files",
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    default: "Node README generator",
  },
  {
    type: "input",
    name: "installation",
    message: "How does the user install your app?",
    default:
      "In terminal, run `git clone git@github.com:fleshborne/Node-README-Generator.git`, then `npm install` to get dependencies, after which user must run `node index.js`",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the user story?",
    default: "WHEN the user runs the app, THEN a markdown file is generated",
  },
  {
    type: "input",
    name: "license",
    message: "Which license do you wish to use?",
    default: "MIT",
  },
  {
    type: "input",
    name: "contributions",
    message: "Who contributed to this project?",
    default: "Blake Thompson",
  },
  {
    type: "input",
    name: "tests",
    message: "Do you have visuals of your app working?",
    default:
      "![testing gif](https://github.com/fleshborne/Node-README-Generator/raw/master/Assets/images/2020-06-01_13-24-36.gif)",
  },
  {
    type: "input",
    name: "sources",
    message: "List your sources here, use commas to separate",
    default:
      "https://openbase.io/js/inquirer, https://www.makeareadme.com/, https://github.com/Naereen/badges, https://ecotrust-canada.github.io/markdown-toc/",
  },
  {
    type: "input",
    name: "email",
    message: "What email can people contact you at?",
    default: "Blakeathompson94@gmail.com",
  },
  {
    type: "list",
    name: "profilePicture",
    message: "Can we add your profile picture?",
    choices: ["Yes", "No"],
  },
];
const init = () => {
  inquirer.prompt(questions).then(async (answers) => {
    //console.log(answers);

    let readmeGenerator = await markdownFormat.generateMarkdown(answers);
    fs.writeFile("README.md", readmeGenerator, (err) => {
      if (err) {
        return console.log(err);
      }

      console.log("Success!");

      // where do I want the file to be place? desktop? local directory? do I need to check?
      //create a file name fileName
      //write to file fileName the data
    });
  });
};
// use this to call initialization
init();
/*    

// What is your User Github profile picture? [string] (image:url)
// What is your User Github email? 
*/
