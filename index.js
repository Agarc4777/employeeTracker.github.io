var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // port is 3306
    port: 3306,

    user: "root",

    password: "B055p0w3r!",
    database: "schema_db"
});

connection.connect(function (err) {
    if (err) throw err;
    start();
});

// function which prompts the user for what action they should take
async function start() {
    var answer = await inquirer.prompt
        (
            {
                name: "mainMenu",
                type: "list",
                message: "Main Menu",
                choices: ["Departments", "Roles", "Employees", "Exit"]
            }
        )

    // based on their answer, either call the bid or the post functions
    if (answer.mainMenu === "Departments") {
        // add functions for department
    } else if (answer.mainMenu === "Roles") {
        // add functions for roles
    } else if (answer.mainMenu === "Employees"){
        // add function for employees.
    } else {
        connection.end();
    }
}