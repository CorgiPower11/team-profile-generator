const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');



function teamCard(team) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <title>My Team</title>
</head>
<body>
<div class="jumbotron jumbotron-fluid bg-info text-light">
    <div class="container text-center">
      <h1>
      My Team
      </h1>
    </div>
</div class="d-flex flex row flex wrap justify-content-center">
${generateTeam(team)}
<div>
</body>
</html>`
}

module.exports = teamGenerator;