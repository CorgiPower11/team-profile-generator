const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const teamGenerator = require('./src/teamGenerator');

teamMember = [];
    const managerAnswers = () => {
    inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is Manger\'s name?'
    },
    {
        type: 'input',
        name: 'Id',
        message: 'What is the Manger\'s ID number?'
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is the Manger\'s email?'
    },
    {
        type: 'input',
        name: 'OfficeNumber',
        message: 'What is the Manger\'s office number?'
    },
    {
      type: 'list',
      message: 'Select the type of role',
      name: 'addRole',
      choices: ['Manager', 'Engineer', 'Intern']
    }
  ])
  .then((managerAnswers) => {
    const filename = `${data.name
      .toLowerCase()
      .split(' ')
      .join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), err =>
      err ? console.log(err) : console.log('Success!')
    );
  });
  };