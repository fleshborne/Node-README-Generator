const axios = require("axios");

const markdownBadge = () => {
  return "[![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)";
};
const swagBadge = () => {
  return "[![built-with-swag](https://ForTheBadge.com/images/badges/built-with-swag.svg)](https://GitHub.com/Naereen/)";
};
const emailMeBadge = () => {
  return "[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/fleshborne)";
};
const tableOfContents = () => {
  return `* [Usage](#usage)\n* [Installation](#install)\n* [License](#license)\n* [Contributors](#contributors)\n* [Tests](#tests)\n* [Sources](#sources)\n* [Contact](#contact)`;
};
async function generateMarkdown(answers) {
  // call github repo using axios to await answers and find users github profile

  const repoUserSearch = await axios.get(
    `https://api.github.com/users/${answers.username}`
  );
  let userPicture = "";
  if (answers.profilePicture === "Yes") {
    userPicture = repoUserSearch.data.avatar_url + ".png";
  }
  let markdownFormat = `
# PROJECT TITLE ${answers.title} ${markdownBadge()}
# TABLE OF CONTENTS
${tableOfContents()}
# DESCRIPTION 
${answers.description}

# INSTALL  
${answers.installation}

# USAGE    
${answers.usage}

# LICENSE 
${answers.license}

# CONTRIBUTORS ${swagBadge()}
![profilePicture](${userPicture})
\n${answers.contributions}

# TESTS
${answers.tests}


# SOURCES 
${answers.sources}

# Contact ${emailMeBadge()}
${answers.email}

`;
  return markdownFormat;
}

//console.log(answers.title);

// add the github email also

module.exports = {
  generateMarkdown: generateMarkdown,
};
