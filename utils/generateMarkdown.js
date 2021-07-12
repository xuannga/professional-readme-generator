// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== "None") {
        return `![GitHub license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
    }
    return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== "None") {
        return (
            `\n* [License](#license)\n`
        )
    }
    return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== "None") {
        return (
            `## License 📛
      Copyright © ${license}. All rights reserved. 
      
      Licensed under the ${license} license.`

        )
    }
    return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
## ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [License](#license)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}
${renderLicenseSection(data.license)}

## License
${data.license}

## Contributions
${data.credit}

## Tests
${data.tests}

## Questions

Github account
[${data.github}](https://github.com/${data.github}/)

Email
If you have questions, you can reach me at ${data.email}.
`;
}

module.exports = generateMarkdown;