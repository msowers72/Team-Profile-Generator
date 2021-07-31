const inquirer = require('inquirer');
const fs = require('fs');
const { number } = require('yargs');

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
                    <li class="list-group-item">email:${answers.email}</li>
                    <li class="list-group-item">Office ID:${answers.officeid}</li>
                    <li class="list-group-item">Employee ID:${answers.employeeid}</li>
                </ul>
            </div>
        </div>
            </div>
        </div>
    </div>
</body>
</html>`;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'role',
            message: 'What is your role?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'officeid',
            message: 'What is your office Id?',
        },
        {
            type: 'input',
            name: 'employeeid',
            message: 'What is your employee ID?',
        },

    ])
    .then((answers) => {
        const htmlPageContent = generateHTML(answers);

        fs.writeFile('index.html', htmlPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created index.html!')
        );
    });