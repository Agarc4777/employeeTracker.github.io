var mysql = require("mysql");
var inquirer = require("inquirer");
var util = require("util");

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
    // var departmentResults = await connection.query("SELECT * FROM schema_db.department");
    // console.table(departmentResults);
    var answer = await inquirer.prompt
        (
            {
                name: "department",
                type: "list",
                message: "choose the department you want to look at.",
                choices: ["Sales", "Service", "Exit"]
            }
        )

    // 
    if (answer.department === "Sales") {
        // add functions for Sales
        
    } else if (answer.department === "Service") {
        // add functions for Service
        
    } else {
        connection.end();
    }
}
// add function for sales employees. will have subcategory of sales director,then sales managers, then sales employees and



// add function for sales







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
    if (answer.mainMenu === "Technicians") {
        // add functions for 
    } else if (answer.mainMenu === "Service Advisors") {
        // add functions for 
    } else if (answer.mainMenu === "Salesmen"){
        // add function for 
    } else if (answer.mainMenu === "Managers"){
        // add function for 
    }else if (answer.mainMenu === "Show All Employees"){
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
                name: "mainMenu",
                type: "list",
                message: "Main Menu",
                choices: ["", "", "", "Exit"]
            }
        )

    // based on their answer, either call the bid or the post functions
    if (answer.mainMenu === "") {
        // add functions for department
    } else if (answer.mainMenu === "") {
        // add functions for roles
    } else if (answer.mainMenu === ""){
        // add function for employees.
    } else {
        connection.end();
    }
}
