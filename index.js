// TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const questions = require('./utils/questionBank');

// TODO: Create a function to write README file
const writeToFile = (userInput) => {
  return new Promise((resolve, reject) => {
    fs.writeFile('README.md', userInput, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File created!',
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
