const axios = require("axios");
// cited from : https://github.com/Naereen/badges
const markdownBadge = () => {
  return "[![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)";
};
const swagBadge = () => {
  return "[![built-with-swag](https://ForTheBadge.com/images/badges/built-with-swag.svg)](https://GitHub.com/Naereen/)";
};
const emailMeBadge = () => {
  return "[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/fleshborne)";
};
// cited from : https://ecotrust-canada.github.io/markdown-toc/
const tableOfContents = () => {
  return `* [Description](#description)\n* [Installation](#install)\n* [Usage](#usage)\n* [License](#license)\n* [Tests](#tests)\n* [Sources](#sources)\n* [Contributions](#contributions)\n* [Contact](#contact)`;
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
# PROJECT TITLE  ${markdownBadge()}
\n${answers.title}
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

# TESTS
${answers.tests}

# SOURCES 
${answers.sources}

# CONTRIBUTIONS 

![profilePicture](${userPicture})
\n${answers.contributions} ${swagBadge()}

# CONTACT 
\n${emailMeBadge()}
${answers.contact}

`;
  return markdownFormat;
}

//console.log(answers.title);

// add the github email also

module.exports = {
  generateMarkdown: generateMarkdown,
};
