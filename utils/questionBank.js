const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'username',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'title',
      message: 'Title of your project:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Description of the project:',
    },
    {
      type: 'list',
      name: 'language1',
      message: 'Made with:',
      choices: ['HTML', 'JavaScript', 'CSS', 'jQuery', 'Node', 'ES6'],
    },
    {
      type: 'list',
      name: 'language2',
      message: 'Made with:',
      choices: ['HTML', 'JavaScript', 'CSS', 'jQuery', 'Node', 'ES6'],
    },
    {
      type: 'input',
      name: 'language3',
      message: 'Made with:',
    },
    {
      type: 'input',
      name: 'link',
      message: 'GitHub link to your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Project usage:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What kind of license would you like to have?',
      choices: ['MIT', 'APACHE 2.0', 'GPL v3', 'BSD 3', 'None'],
    },
    {
      type: 'input',
      name: 'contributor',
      message: 'List out all contributors:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What command is used to run a test:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Email for question/contact:',
    },
  ]);
};

module.exports = questions;
