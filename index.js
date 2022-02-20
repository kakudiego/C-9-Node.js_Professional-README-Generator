// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "Enter your GitHub username:",
    },
    {
      type: "input",
      name: "title",
      message: "Title of your project:",
    },
    {
      type: "input",
      name: "description",
      message: "Description of the project:",
    },
    {
      type: "checkbox",
      name: "languages",
      message: "Languages: (Check all that apply)",
      choices: ["JavaScript", "HTML", "CSS", "ES6", "jQuery", "Bootstrap", "Node"],
    },
    {
      type: "input",
      name: "link",
      message: "GitHub link to your project:",
    },
    {
      type: "input",
      name: "installation",
      message: "Installation instructions:",
    },
    {
      type: "input",
      name: "usage",
      message: "Project usage:",
    },
    {
      type: "list",
      name: "license",
      message: "What kind of license would you like to have?",
      choices: ["MIT", "APACHE 2.0", "GPL v3", "BSD 3", "None"],
    },
    {
      type: "input",
      name: "contributor",
      message: "List out all contributors:",
    },
    {
      type: "input",
      name: "tests",
      message: "What command is used to run a test:",
    },
    {
      type: "input",
      name: "email",
      message: "Email for question/contact:",
    },
  ]);
};

// TODO: Create a function to write README file
const writeToFile = (userInput) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("README.md", userInput, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
};

// TODO: Create a function to initialize app
async function init() {
  try {
    const answers = await questions();
    generateMarkdown(answers);
    writeToFile(generateMarkdown(answers));
  } catch (err) {
    console.log(err);
  }
}

// Function call to initialize app
init();
