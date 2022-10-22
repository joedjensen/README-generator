// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const utils = require("./utils/utils.js")

// TODO: Create an array of questions for user input
const questions = [
    {
        message: "What is the title of your project?",
        name: "projectTitle"
    },
    {
        message: "Enter a description of your project",
        name: "projectDescription"
    },
    {
        message: "How do you install your project?",
        name: 'projectInstallation'
    },
    {
        message: 'How does one use your project?',
        name: "projectUsage"
    },
    {
        message: 'What are the contribution guidelines for this project?',
        name: "projectContributionGuidelines"
    },
    {
        message: "What license would you like to use for your project?",
        name: "projectLicense",
        type: "list",
        choices: Object.keys(utils.licenses)
    },
    {
        message: "How does one run the tests for this project?",
        name: "projectTests"
    },
    {
        message: "What is your github username?",
        name: "githubUsername"
    },
    {
        message: "what is your email?",
        name: "emailAddress"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("README generated.")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(data => {
            writeToFile("tempReadMe.md", utils.generateMarkdown(data))
        })
}

// Function call to initialize app
init();
