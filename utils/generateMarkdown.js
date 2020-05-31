/*
// The README will be populated with the following:

// At least one badge
// Project title
// Description
// Table of Contents
// Installation
// Usage
// License
// Contributing
// Tests
// Questions

// User GitHub profile picture
// User GitHub email
*/

function generateMarkdown(data) {
  return `
# ${data.username}
# ${data.title}
# ${data.description}
# ${data.contents}
# ${data.installation}
# ${data.usage}
# ${data.license}
# ${data.contributing}
# ${data.tests}
# ${data.questions}

  
`;
}

module.exports = generateMarkdown;
