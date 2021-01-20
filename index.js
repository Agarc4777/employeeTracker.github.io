var mysql = require("mysql");
var inquirer = require("inquirer");
var util = require("util");
const { get } = require("http");
// require("console.table");

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
    var departmentRows = await connection.query("SELECT * FROM department");
    console.log(departmentRows);
    var choices = [];
    for (var i = 0; i < departmentRows.length; i++) {
        choices.push(departmentRows[i].name);
    }
    var answer = await inquirer.prompt
        (
            {
                name: "department",
                type: "list",
                message: "choose the department you want to look at.",
                choices: choices,
            }
        )
    // if (answer.department === "Sales") {
    //     sales();
    // } else if (answer.department === "Service") {
    //     service();
    // } else {
    //     connection.end();
    // }
    getDepartment(answer.department);
}
// add function for sales employees. will have subcategory of sales director,then sales managers, then sales employees and



// add function for sales
async function getDepartment(department) {
    var answer = await inquirer.prompt
    // var department
        (
            {
                name: "empChoice",
                type: "list",
                message: "Here are your choices for " + department +" department",
                choices: ["Show all "+ department +" Employees","Add employee", "Exit"]
            }
        )
    if (answer.empChoice === "Show all "+ department +" Employees") {
        // add functions for Sales
        showEmpByDep(department);
    } else {
        connection.end();
    }
}


async function showEmpByDep(department) {
    var departmentRows = await connection.query("SELECT * FROM department");
    var employeeRows = await connection.query("SELECT * FROM employee")
}

async function addEmployee() {    
    var employeeRows = await connection.query("SELECT * FROM employee");
    console.log(employeeRows);
    var empChoices = [];
    for (var i = 0; i < employeeRows.length; i++) {
        empChoices.push({
            name:employeeRows[i].first_name,
            value:employeeRows[i].id,
        });
    }    
    var roleRows = await connection.query("SELECT * FROM roles");
    console.log(roleRows);
    var roleChoices = [];
    for (var i = 0; i < roleRows.length; i++) {
        roleChoices.push({
            name:roleRows[i].title,
            value:roleRows[i].id,
        });
    }
    var data = await inquirer.prompt
        (
            {
                name: 'firstName',
                type: 'input',
                message: 'First Name: '
            },
            {
                name: 'lastName',
                type: 'input',
                message: 'Last Name: '
            },
            {
                name: 'empRole',
                type: 'list',
                message: 'Role: ',
                choices: roleChoices
            },
            {
                name: "manager",
                type: "list",
                message: "who is the manager of the employee?",
                choices: empChoices
            }
        )
}



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
