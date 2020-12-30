// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'username',
      message: 'What is your user GitHub username? (Required)',
      validate: usernameInput => {
        if (usernameInput) {
          return true;
        } else {
          console.log('Please enter your username!');
          return false;
        }
      }
    },

    {
      type: 'input',
      name: 'email',
      message: 'What is your user email address? (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter your email!');
          return false;
        }
      }
    },

    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? (Required)',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter a project title!');
          return false;
        }
      }
    },

    {
      type: 'input',
      name: 'description',
      message: 'Please provide a description of your project. (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Please enter a description!');
          return false;
        }
      }
    },

    {
      type: 'input',
      name: 'url',
      message: 'What is URL of your project in GitHub?',
    },

    {
      type: 'input',
      name: 'packages',
      message: 'What packages need to be installed to run your project?',
    },
    
    {
      type: 'input',
      name: 'technologies',
      message: 'What technologies were used to create your project?',
    },

    {
      type: 'input',
      name: 'usage',
      message: 'Please provide an example of how your project can be used.',
    },

    {
      type: 'list',
      name: 'license',
      message: 'What kind of license would you like to have?',
      choices: ["MIT", "APACHE 2.0", "GPLv3", "Mozilla Public 2.0"]
    },

    {
      type: 'input',
      name: 'contributors',
      message: 'Please list out all contributors (include yourself).',
    },

    {
      type: 'input',
      name: 'testing',
      message: 'What command is used to run a test?',
    },

  ]);
  
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, "utf8", function (err) {
    if (err) {
      throw err;
    }
    console.log("You have successfully generated a README file for your project!");
  });
}

// TODO: Create a function to initialize app
async function init() {
  try {
    const answers = await questions();
    generateMarkdown(answers);
    writeToFile("README.md", generateMarkdown(answers));
  } catch (err) {
    console.log(err);
  }
}

// Function call to initialize app
init();
