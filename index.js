const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('@jest/console');
const data = require('./data');
const managerEmp = [];
const engineerEmp = [];
const internEmp = [];

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const questions = [
    {
      message: 'What is your name?',
      name: 'name',
    },
    {
      message: 'What is your employee ID?',
      name: 'id',
    },
    {
      message: 'What is your email address?',
      name: 'email',
    },
    {
      message: 'What is your office number?',
      name: 'officeNumber',
    },
];

const nextStep = [
     {
       type: 'list',
       message: "Which of the following would you like to do?",
       choices: ['Add an engineer?', 'Add an intern?', 'Finished?'],
       name: 'nextStep',
    },
]; 

const engineerAry = [
    {
       message: 'What is your engineers name?',
       name: 'name',
    },
    {
       message: 'What is your engineers ID?',
       name: 'id',
    },
    {
       message: 'What is your engineers email?',
       name: 'email',
    },
    {
       message: 'What is your engineers GitHub username?',
       name: 'github',
    }
];

const internAry = [
    {
        message: 'What is your interns name?',
        name: 'name',
     },
     {
        message: 'What is your interns ID?',
        name: 'id',
     },
     {
        message: 'What is your interns email?',
        name: 'email',
     },
     {
        message: 'What is your interns school?',
        name: 'school',
     }
];


function start() {
    inquirer.prompt(questions)
    .then(({name, id, email, officeNumber}) => {
        managerEmp.push(new Manager (name, id, email, officeNumber))
        moveOn();
    })
};

function moveOn() {
    inquirer.prompt(nextStep)
    .then((data) => {
        if (data.nextStep === "Add an engineer?") {
            engineer();
        } else if (data.nextStep === "Add an intern?"){
            intern();
        } else {
            console.log('All set! One moment please.');
            writeToFile(managerEmp, engineerEmp, internEmp);
        }
    })
};

function engineer() {
    inquirer.prompt(engineerAry)
    .then(({name, id, email, github}) => {
        engineerEmp.push(new Engineer (name, id, email, github));
        moveOn();
    })
};

function intern() {
    inquirer.prompt(internAry)
    .then(({name, id, email, school}) => {
        internEmp.push(new Intern (name, id, email, school));
        moveOn();
    })
};

function writeToFile(managerEmp, engineerEmp, internEmp) {
    console.log(managerEmp, engineerEmp, internEmp);
    fs.writeFile("./dist/index.html", data(managerEmp, engineerEmp, internEmp), (err) => (err) ? console.log("Error with generating a README") : console.log("Success! README generated"))
};

start();