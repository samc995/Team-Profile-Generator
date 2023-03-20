const generateHTML = require(`./src/generateHTML`);

const Manager = require(`./lib/Manager`);

const Engineer = require(`./lib/Engineer`);

const Intern = require(`./lib/Intern`);

const fs = require(`fs`);

const inquirer = require(`inquirer`);

const employeeArray = [];

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is the manager's name?",
    },
    {
      type: "input",
      name: "ID",
      message: "What is the manager's ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the manager's email?",
    },
    {
      type: "input",
      name: "officenumber",
      message: "What is the manager's office number?",
    },
  ])
  .then((answers) => {
    const manager = new Manager(
      answers.name,
      answers.ID,
      answers.email,
      answers.officenumber
    );
    employeeArray.push(manager);
    createTeam();
  });

const addIntern = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "What is the intern's name?",
    },
    {
      type: "input",
      name: "internID",
      message: "What is the intern's ID?",
    },
    {
      type: "input",
      name: "internEmail",
      message: "What is the intern's email?",
    },
    {
      type: "input",
      name: "internSchool",
      message: "What is the intern's school?",
    },
  ]};
  .then((answers) => {
    const intern = new Intern(
      answers.name,
      answers.ID,
      answers.email,
      answers.school
    );
    employeeArray.push(intern);
    createTeam();
  });



const addEngineer = () => {

  inquirer.prompt([
    {
      type: "input",
      name: "engineerName",
      message: "What is the engineer's name?",
    },
    {
      type: "input",
      name: "engineerID",
      message: "What is the engineer's ID?",
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "What is the engineer's email?",
    },
    {
      type: "input",
      name: "engineerGithub",
      message: "What is the engineer's github?",
    },
  ]};
  .then((answers) => {
    const engineer = new Engineer(
      answers.name,
      answers.ID,
      answers.email,
      answers.github
    );
    employeeArray.push(intern);
    createTeam();
  });

};

const createTeam = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What team member would you like to add next?",
        choices: ["add engineer", "add intern", "I'm finished."],
      },
    ])
    .then((answer) => {
      if (answer.choice === "add engineer") {
        addEngineer();
      } else if (answer.choice === "add intern") {
        addIntern();
      } else {
        fs.writeFileSync(
          path.join(__dirname, "/dist", "team.html"),
          generateHTML(employeeArray)
        );
      }
    });
};
