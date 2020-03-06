function generateMarkdown(answers, response) {
    return `
  1. ${answers.GitHub_username}
  2. ${answers.badge}
  3. ${answers.Project_Title}
  4. ${answers.description}
  5. ${answers.table_of_contents}
  6. ${answers.installation}
  7. ${answers.usage}
  8. ${answers.liscense}
  9. ${answers.tests}
  10. ${answers.GitHub_username}
  11. ${answers.GitHub_email}
  12. ${response.data.avatar_url}
  ![Image of User](${response.data.avatar_url})

  
  `;
}

module.exports = generateMarkdown;
