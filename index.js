// TODO: Include packages needed for this application
var inquirer = require("inquirer");
var fs = require("fs");

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
            type: 'list',
            name: 'license',
            message: 'List your licenses',
            choices: ["MIT", "APACHE2.0", "Boost1.0", "GPL3.0", "BSD2" ,"BSD3", "None"]
        },
        {
            type: 'input',
            name: 'credit',
            message: 'List your collaborators',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What command is used to run the tests?',
            default: "npm test"
        },
    ]).then((data) => {
        const markDown = `
## ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credit](#credit)
- [Tests](#tests)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Credit
${data.credit}

## Tests
${data.tests}
`;

    fs.writeFile('userReadMe.md', markDown, function (err) {
        if(err) {
            return console.log(err);
        }
        console.log('Success!');
    })
})
};



// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
