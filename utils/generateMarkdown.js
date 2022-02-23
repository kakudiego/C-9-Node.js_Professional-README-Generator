function generateMarkdown(data) {
  const avatar = `https://github.com/${data.username}.png?size=50`;
  const gitHub = `https://img.shields.io/badge/Github-${data.username}-4cbbb9`;

  return `
  
  # ${data.title} 

  [![badge](https://img.shields.io/badge/license-${data.license}-orange)](https://opensource.org/licenses/${data.license})
  ![badge](https://img.shields.io/badge/Made%20with-${data.language1}-blue)
  ![badge](https://img.shields.io/badge/Made%20with-${data.language2}-green)
  ![badge](https://img.shields.io/badge/Made%20with-${data.language3}-yellow)
  
  ## Description
    ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Tests](#tests)
  - [Contributors](#contributors)
  - [Contact](#contact)

  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}

  ## License:
  This application is covered under the ${data.license} license.
  [![badge](https://img.shields.io/badge/license-${data.license}-orange)](https://opensource.org/licenses/${data.license})

  ## Contributors
  ${data.contributor}

  ## Tests
  To test, run the following command: ${data.tests}

  ## Contact
  \n![Badge](${gitHub}) 
  \n![Profile Image](${avatar})
  \nView the project in GitHub at: ${data.link}
  \nIf you have any questions, contact the author directly at ${data.email}.`;
}

module.exports = generateMarkdown;
