// Variables
const fs = require("fs")
const inquirer = require("inquirer");
const axios = require("axios");
// const electron = require("electron");
const markdown = require("./generatemarkdown")

const questions = [
    {
        type: 'input',
        name: 'badge',
        message: "Do you have a badge?"
    },
    {
        type: 'input',
        name: 'Project_Title',
        message: "What's your project title?"
    },
    {
        type: 'input',
        name: 'description',
        message: "Describe your project"
    },
    {
        type: 'input',
        name: 'table_of_contents',
        message: "Table of Contents?"
    },
    {
        type: 'input',
        name: 'installation',
        message: "Install"
    },
    {
        type: 'input',
        name: 'usage',
        message: "Describe the usage"
    },
    {
        type: 'input',
        name: 'liscense',
        message: "Liscense"
    },
    {
        type: 'input',
        name: 'contributing',
        message: "Contributing?"
    },
    {
        type: 'input',
        name: 'tests',
        message: "Tests"
    },
    {
        type: 'input',
        name: 'GitHub_username',
        message: "What's your GitHub username?"
    },
    {
        type: 'input',
        name: 'GitHub_email',
        message: "What's your GitHub email?"
    },
    
]
inquirer.prompt(questions)
.then(answers => {

// console.log(answers);
const queryUrl = `https://api.github.com/users/${answers.GitHub_username}`;
axios.get(queryUrl)
    .then(function(response){
        // console.log(response.data.email)
        // console.log(response.data.avatar_url)
        
        fs.writeFile("README.md", markdown(answers, response), function (err) {
            if (err) {
              throw err;
            }

    })
});



});
