// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown } = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [

    
    {
        type: "input",
        message: "What is your project title?",
        name: "title",
    },
    {
        type: "input",
        message: "Provide a short description of your project.",
        name: "description",
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "installation",
    },
    {
        type: "input",
        message: "Provide instructions and examples for use.",
        name: "usage",
    },
    {
        type: "input",
        message: "Provide contribution guidelines.",
        name: "contributing",
    },
    {
        type: "input",
        message: "Provide test instructions.",
        name: "tests",
    },
    {
        type: "list",
        message: "Choose a license for your project.",
        name: "license",
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None']
    },
    {
        type: "input",
        message: "Enter your GitHub username.",
        name: "github",
    },
    {
        type: "input",
        message: "Enter your email address.",
        name: "email",
    }


];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', data, (err) =>
        err ? console.error(err) : console.log(`${fileName} has been generated successfully!`)
    );
}





// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', markdown);
    });
}

// Function call to initialize app
init();
