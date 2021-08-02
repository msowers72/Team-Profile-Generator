const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const axios = require('axios');
const jest = require('jest');
const Manager = require("./lib/manager")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const Employee = require("./lib/employee")


const writeFileAsync = util.promisify(fs.writeFile);
let teamArray = []
let managerArray = []
let engineerArray = []
let internArray = []
let employeeArray = []

const createManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'employeeid',
            message: 'What is your employee ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'number',
            message: 'What is your office number?',
        },


    ]);

};

const addTeamMembers = function () {
    inquirer
        .prompt([
            {
                type: "list",
                name: "choice",
                message: "What type of employee would you like to create?",
                choices: ["Manager", "Engineer", "Intern"]
            }])
}

const createEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'employeeid',
            message: 'What is your employee ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'number',
            message: 'What is your office number?',
        },


    ]);

};

const createIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'employeeid',
            message: 'What is your employee ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'number',
            message: 'What is your office number?',
        },


    ]);

};

const generateHTML = (answers) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
  <script src="https://kit.fontawesome.com/c502137733.js"></script>
  <title>Team Page</title>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">Meet My Team</h1>                
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                <div class="card employee-card">
                    <div class="card-header">
                        <h2 class="card-title">${answers.name}</h2>
                        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${answers.role}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">email: ${answers.email}</li>
                            <li class="list-group-item">Office ID: ${answers.officeid}</li>
                            <li class="list-group-item">Employee ID: ${answers.employeeid}</li>
                        </ul>
                    </div>            
                </div>
            </div>
        </div>
    </div>
</body>
</html>`;

/*
- collect manager info
- prompt for more users
  - engineer
  - intern

all done?
  - write file to html
  writeFileAsync(manager, engineers, interns) {
      const managerHTML = (manager) => {
         return `
                <div class="card employee-card">
                    <div class="card-header">
                        <h2 class="card-title">${manager.name}</h2>
                        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.role}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">email: ${manager.email}</li>
                            <li class="list-group-item">Office ID: ${manager.officeid}</li>
                            <li class="list-group-item">Employee ID: ${manager.employeeid}</li>
                        </ul>
                    </div>            
                </div>
      `
      };

      const engineersHTML = (engineers) => {
          let returnString = "";

          if (engineers && engineers.length > 0) {
              engineers.forEach(engineer => {
                  returnString += `
                <div class="card employee-card">
                    <div class="card-header">
                        <h2 class="card-title">${engineer.name}</h2>
                        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${engineer.role}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">email: ${engineer.email}</li>
                            <li class="list-group-item">Office ID: ${engineer.officeid}</li>
                            <li class="list-group-item">Employee ID: ${engineer.employeeid}</li>
                        </ul>
                    </div>            
                </div>
                  `
              })
          }

          return returnString;
      }

      const finalOut = `
      <html>
        <body>
            <div class="cards">
            ${managerHTML(manager)}
            ${engineersHTML(engineers)}
            ${interns}
            </div>
        </body>
      </html>
      `
  }

*/

const init = () => {
    // get manager details
    // prompt for new user
    // - engineer - getEngineerInfo()
    // - intern  - getInternInfo()
    // -all done - writeFile(manager, engineers, interns)
    createManager()
        .then((answers) => {
            console.log(answers)
            const manager = new Manager(answers.name, answers.employeeid, answers.email, answers.number)
            console.log(manager);
            const engineer = new Engineer(answers.name, answers.employeeid, answers.email, answers.number)
            console.log(engineer)
            //push manager to array
            teamArray.push(manager)
            console.log(teamArray)
            teamArray.push(engineer)
            console.log(teamArray)
            addTeamMembers();


         writeFileAsync('index.html', generateHTML(answers))
        })
    //.then(() => console.log('Successfully wrote to index.html'))
    //.catch((err) => console.error(err));
};

init();



/*
- collect manager info
- prompt for more users
  - engineer
  - intern

all done?
  - write file to html
  writeFileAsync(manager, engineers, interns) {
      const managerHTML = (manager) => {
         return `
                <div class="card employee-card">
                    <div class="card-header">
                        <h2 class="card-title">${manager.name}</h2>
                        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.role}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">email: ${manager.email}</li>
                            <li class="list-group-item">Office ID: ${manager.officeid}</li>
                            <li class="list-group-item">Employee ID: ${manager.employeeid}</li>
                        </ul>
                    </div>
                </div>
      `
      };

      const engineersHTML = (engineers) => {
          let returnString = "";

          if (engineers && engineers.length > 0) {
              engineers.forEach(engineer => {
                  returnString += `
                <div class="card employee-card">
                    <div class="card-header">
                        <h2 class="card-title">${engineer.name}</h2>
                        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${engineer.role}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">email: ${engineer.email}</li>
                            <li class="list-group-item">Office ID: ${engineer.officeid}</li>
                            <li class="list-group-item">Employee ID: ${engineer.employeeid}</li>
                        </ul>
                    </div>
                </div>
                  `
              })
          }

          return returnString;
      }

      const finalOut = `
      <html>
        <body>
            <div class="cards">
            ${managerHTML(manager)}
            ${engineersHTML(engineers)}
            ${interns}
            </div>
        </body>
      </html>
      `
  }

*/