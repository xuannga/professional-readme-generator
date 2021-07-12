// TODO: Include packages needed for this application
var inquirer = require("inquirer");
var fs = require("fs");

const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const promptUser = [{
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
        type: 'list',
        name: 'license',
        message: 'List your licenses',
        choices: ["MIT", "None"]
    },
    {
        type: 'input',
        name: 'credit',
        message: 'List your contributions',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command is used to run the tests?',
        default: "node index.js"
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username',

    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(promptUser)
        .then((inquirerAnswers) => {
            console.log("Generating...");
            writeToFile("userReadMe.md", generateMarkdown({...inquirerAnswers }));
        })
}

// Function call to initialize app
init();