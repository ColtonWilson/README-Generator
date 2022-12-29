// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
        default: 'Project Title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project title is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Write a description of your project.",
        name: 'description',
        default: 'Project Description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project description is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Describe the steps required to install your project. (I.E. Installation section)",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Examples of your project in use. (I.E. Usage section)",
        name: 'usage'
    },
    {
        type: 'input',
        message: "Provide guidelines on how other developers can contribute to your project. (I.E. Contribution Guidelines)",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "Provide any tests written for your application and examples on how to run them. (I.E. Test Instructions)",
        name: 'tests'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0'],
        name: 'license'
    },
    {
        type: 'input',
        message: "What is your GitHub username? (No @ needed)",
        name: 'username',
        default: 'ColtonWilson',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub username is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your Email?",
        name: 'email',
        default: 'colton_wilson93@yahoo.com',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid email is required.");
            }
            return true;
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(data, fileName = "./dist/README.md") {
        fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Success! Your README.md file has been generated")
    });
}

// TODO: Create a function to initialize app
async function init() {
     inquirer.prompt(questions)
    .then (answers => writeToFile(generateMarkdown(answers)))
}

// Function call to initialize app
init();
