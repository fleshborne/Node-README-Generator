const axios = require("axios");

const markdownBadge = () => {
  return "[![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)";
};
async function generateMarkdown(answers) {
  // call github repo using axios to await answers and find users github profile

  const repoUserSearch = await axios.get(
    `https://api.github.com/users/${answers.username}`
  );
  //console.log(response);
  let userEmail = "";
  if (answers.email === "Yes") {
    userEmail = repoUserSearch.data.email;
  }
  let userPicture = "";
  if (answers.profilePicture === "Yes") {
    userPicture = repoUserSearch.data.avatar_url;
  }
  let markdownFormat = `
# PROJECT TITLE ${answers.title} ${markdownBadge()}

# DESCRIPTION 
${answers.description}

# INSTALL  
${answers.installation}

# USAGE    
${answers.usage}

# LICENSE 
${answers.license}

# CONTRIBUTORS 
${answers.contributions}

# TESTING 
${answers.tests}


# Contact
${answers.email} 
${answers.profilePicture} 
`;
  return markdownFormat;
}

//console.log(answers.title);

// add the github email also

module.exports = {
  generateMarkdown,
};
