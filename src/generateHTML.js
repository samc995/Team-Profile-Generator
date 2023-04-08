const generateHTML = (employeearray) => {
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>HTML 5 Boilerplate</title>
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <header>
          <nav class="navbar">
            <container class="navbar-title">Team Profile</container>
          </nav>
        </header>
        <main>
          <div class="container">
            <div id="team-cards">
            ${generateTeam(employeearray)}
        </div>
    </div>
        </main>
        <script src="index.js"></script>
      </body>
    </html>
    `
}

const generateTeam = (employeearray) => {
    let html = ""
    for (let i = 0; i < employeearray.length; i ++) {
        if (employeearray[i].getRole() === "Manager") {
            html += `<div class="card-title">
            <h2>${employeearray[i].getName()}</h2>
            <h3>Manager</h3>
          </div>
          <div class="card-body">
            <p class="id">ID: ${employeearray[i].getId()}</p>
            <p class="email">Email: ${employeearray[i].getEmail()}</p>
            <p class="office-number">Office Number: ${employeearray[i].getOfficeNumber()}</p>
          </div>`
        }else if (employeearray[i].getRole() === "Engineer") {
            html += `<div class="card-title">
            <h2>${employeearray[i].getName()}</h2>
            <h3>Engineer</h3>
          </div>
          <div class="card-body">
            <p class="id">ID: ${employeearray[i].getId()}</p>
            <p class="email">Email: ${employeearray[i].getEmail()}</p>
            <p class="github">GitHub: ${employeearray[i].getGithub()}</p>
          </div>`
        } else {
            html += `<div class="card-title">
            <h2>${employeearray[i].getName()}</h2>
            <h3>Intern</h3>
          </div>
          <div class="card-body">
            <p class="id">ID: ${employeearray[i].getId()}</p>
            <p class="email">Email: ${employeearray[i].getEmail()}</p>
            <p class="school">School: ${employeearray[i].getSchool()}</p>
          </div>`
        }
    } return html 
}
 module.exports = generateHTML