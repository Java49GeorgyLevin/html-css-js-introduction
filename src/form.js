const inputElements = document.querySelectorAll(".form-class [name]");
const MIN_SALARY = 1000;
const MAX_SALARY = 40000;
const MIN_YEAR = 1950;
const maxYear = getMaxYear();
const TIME_OUT_ERROR_MESSAGE = 5000;
const ERROR_CLASS = "error";
const company = new Company();

const dateErrorElement = document.getElementById("date_error");
const salaryErrorElement = document.getElementById("salary_error");

const menuSection = document.querySelectorAll("section");
const menuButton = document.querySelectorAll(".menu-button");
const ACTIVE_BUTTON = "active-button";

const allEmployees = document.querySelector(".all-employees");
const salaryEmployees = document.querySelector(".salary-employees");
const salaryFrom = -1;
const salaryTo = -1;

function onSubmit(event) {
    event.preventDefault();
    console.log("submitted");
    const employee = Array.from(inputElements).reduce(
        (res, cur) => {
            res[cur.name] = cur.value;
            return res;
        }, {}
    )
    console.log(employee)
    company.hireEmployee(employee);
    employeeAdded(employee.employee_name);
    
}
function onChange(event) {

    if (event.target.name == "salary") {
        validateSalary(event.target)
    } else if (event.target.name == "birthDate") {
        validateBirthdate(event.target);
    }
}
function validateSalary(element) {
    const value = +element.value;
    if (value < MIN_SALARY || value > MAX_SALARY) {
        const message = value < MIN_SALARY ? `salary must be ${MIN_SALARY} or greater`
            : `salary must be ${MAX_SALARY} or less`;
        showErrorMessage(element, message, salaryErrorElement);
    }

}
function validateBirthdate(element) {
    const value = +element.value.slice(0, 4);
    if (value < MIN_YEAR || value > maxYear) {
        const message = value < MIN_YEAR ? `year must be ${MIN_YEAR} or greater`:
             `year must be ${maxYear} or less`;
        showErrorMessage(element, message, dateErrorElement) ;    

    }

}
function showErrorMessage(element, message, errorElement) {
    element.classList.add(ERROR_CLASS);
    errorElement.innerHTML = message;
    setTimeout(() => {
        element.classList.remove(ERROR_CLASS);
        element.value = ''; 
        errorElement.innerHTML = '';
    }, TIME_OUT_ERROR_MESSAGE);
}

function getMaxYear() {
    return new Date().getFullYear();
}
function Company() {
    this.employees = [];
}
Company.prototype.hireEmployee = function(employee) {
    this.employees.push(employee);
}
Company.prototype.getAllEmployees = function(){
    return this.employees;
}
Company.prototype.getEmployeesBySalary = function(salaryFrom, salaryTo) {
    return company.getAllEmployees().filter(empl => {
        if(empl.salary > salaryFrom && empl.salary < salaryTo)
        return empl; 
    })
}

function showMenu(index) {
    menuSection.forEach (section => section.hidden = true);
    menuButton.forEach (button => button.classList.remove(ACTIVE_BUTTON));
    menuSection[index].hidden = false;
    menuButton[index].classList.add(ACTIVE_BUTTON);
    if(index == 1) {
        showAllEmployees();
    }

}

function employeeAdded(name) {
    // console.log("add", name);
    const confirmationAdded = document.getElementById("the-employee-added");
    confirmationAdded.innerHTML = `${name} added successfully`;
    setTimeout(() => confirmationAdded.innerHTML = '', 3000);
}

function listEmployees() {
    console.log(company.getAllEmployees());

    const arEmpl = company.getAllEmployees().map(empl => 
    // getAllEmployees.forEach(empl => {
    // .map(empl => {
       
       employeeData(empl));
      // allEmployees.innerHTML = `${empl}`
    //   console.log(employeeData(empl));
      return arEmpl.join('');
    } 
    // return "Hi!"
// }
function listSalary() {
    const arEmpl = company.getEmployeesBySalary().map(empl =>
        employeeData(empl));
        return arEmpl.join('');

        // )
}

function employeeData(empl) {
    return `<li class="cart">
    <p>Name: ${empl.employee_name}</p>
    <p>Email: ${empl.email}</p>
    <p>BirthDate: ${empl.birthDate}</p>
    <p>Department: ${empl.department}</p>
    <p>Salary: ${empl.salary}</p>
    </li>`
}

function showAllEmployees() {
allEmployees.innerHTML = listEmployees();
}

function showSalaryEmployees() {
    salaryEmployees.innerHTML = listSalary();

}
function salaryMinMax(event) {
    salaryFrom = event.target[salary-from].value;
    salaryTo = event.target.salary-to.value;
    // if (event.target.name == "salaryFrom"
    // name="salary-from"
    // name="salary-to"
    showSalaryEmployees();
}