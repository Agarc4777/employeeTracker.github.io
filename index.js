var mysql = require("mysql");
var inquirer = require("inquirer");
var util = require("util");
require("console.table");

var connection = mysql.createConnection({
    host: "localhost",

    // port is 3306
    port: 3306,

    user: "root",

    password: "B055p0w3r!",
    database: "employees_db"
});

connection.query = util.promisify(connection.query);

connection.connect(function (err) {
    if (err) throw err;
    
    start();
});



// function which asks the user for what they should take
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
    if (answer.mainMenu === "Departments") {
        departments();
    } else if (answer.mainMenu === "Roles") {
        roles();
    } else if (answer.mainMenu === "Employees"){
        employees();
    } else {
        connection.end();

    }
}

// function for departments and
async function departments() {
    var answer = await inquirer.prompt
        (
            {
                name: "department",
                type: "list",
                message: "choose the department you want to look at.",
                choices: ["Sales", "Service", "Exit"]
            }
        )
    if (answer.department === "Sales") {
        sales();
    } else if (answer.department === "Service") {
        
    } else {
        connection.end();
    }
}
// add function for sales employees. will have subcategory of sales director,then sales managers, then sales employees and



// add function for sales
async function sales() {
    var answer = await inquirer.prompt
        (
            {
                name: "sales",
                type: "list",
                message: "Here is a list of sales employees.",
                choices: ["", "", "Exit"]
            }
        )

    // 
    if (answer.sales === "Sales") {
        // add functions for Sales

        
    } else {
        connection.end();
    }
}






// add function for service









// function for roles
async function roles() {
    var answer = await inquirer.prompt
        (
            {
                name: "roles",
                type: "list",
                message: "What roles do you want to look at?",
                choices: ["Technicians", "Service Advisors", "Salesmen", "Managers", "Show All Employees", "Exit"]
            }
        )

    // 
    if (answer.roles === "Technicians") {
        // add functions for 
    } else if (answer.roles === "Service Advisors") {
        // add functions for 
    } else if (answer.roles === "Salesmen"){
        // add function for 
    } else if (answer.roles === "Managers"){
        // add function for 
    } else {
            connection.end();
        }
    }


// add functions for every role.








// function for employees

async function employees() {
    var answer = await inquirer.prompt
        (
            {
                name: "employees",
                type: "list",
                message: "Showing all employees",
                choices: ["Exit"]
            }
        )

    // based on their answer, either call the bid or the post functions
    if (answer.employees === "") {
        // add functions for departmen
    } else {
        connection.end();
    }
}
