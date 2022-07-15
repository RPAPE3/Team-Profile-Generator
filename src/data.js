


function test(managerEmp, engineerEmp, internEmp) {
  
    return `

    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>

<nav class="navbar bg-secondary p-2 text-dark bg-opacity-25">
  <div class="container justify-content-center">
    <h1 class="fw-bold display-1">~TEAM~</h1>
  </div>
</nav>

  <div class="container">
    <div class="row justify-content-center">
      ${managerEmp.map((info) => managerMarkup(info))}
    </div>
  </div>


  <div class="container">
    <div class="row justify-content-center">
      ${engineerEmp.map((info) => engineerMarkup(info))}
    </div>
  </div>

  <div class="container">
    <div class="row justify-content-center">
      ${internEmp.map((info) => internMarkup(info))}
    </div>
  </div>
    <!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
</body>
</html>
  
  `};

  const managerMarkup = (manager) => {
    return `
  <div class="card text-bg-primary mb-3" style="max-width: 20rem;">
    <div class="card-header">${manager.getRole()}</div>
    <div class="card-body">
      <h5 class="card-title">${manager.getName()}</h5>
      <div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-bg-light">ID: ${manager.getId()}</li>
          <li class="list-group-item text-bg-light">Email: ${manager.getEmail()}</li>
          <li class="list-group-item text-bg-light">GitHub: ${manager.getOfficeNumber()}</li>
        </ul>
      </div>
    </div>
  </div>
    `
  };

  const engineerMarkup = (engineer) => {
    return `
    <div class="card text-bg-info mb-3" style="max-width: 20rem;">
    <div class="card-header">${engineer.getRole()}</div>
    <div class="card-body">
      <h5 class="card-title">${engineer.getName()}</h5>
      <div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-bg-light">ID:  ${engineer.getId()}</li>
          <li class="list-group-item text-bg-light">Email: ${engineer.getEmail()}</li>
          <li class="list-group-item text-bg-light">GitHub: ${engineer.getGithub()}</li>
        </ul>
      </div>
    </div>
  </div>
    `
  };

  const internMarkup = (intern) => {
    return `
  <div class="card text-bg-light mb-3" style="max-width: 20rem;">
    <div class="card-header">${intern.getRole()}</div>
    <div class="card-body">
      <h5 class="card-title">${intern.getName()}</h5>
      <div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-bg-light">ID:  ${intern.getId()}</li>
          <li class="list-group-item text-bg-light">Email: ${intern.getEmail()}</li>
          <li class="list-group-item text-bg-light">GitHub: ${intern.getSchool()}</li>
        </ul>
      </div>
    </div>
  </div>
    `
  };


  module.exports = test; 