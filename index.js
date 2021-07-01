// TODO: Include packages needed for this application
var inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What do you want the title to be?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please give a description of your project',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
      },
      {
        type: 'input',
        name: 'license',
        message: 'List your licenses',
      },
      {
        type: 'input',
        name: 'credit',
        message: 'List your collaborators',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'How to reach you',
      },
    ]);
  };
  
  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
