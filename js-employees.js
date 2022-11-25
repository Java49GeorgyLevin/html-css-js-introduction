// 1.	Write function createRandomEmployees that creates array of a given number of the random Employee objects. The factory method createEmployee that creates one Employee object by the given parameters has been written at CW #19 https://github.com/Java49Telran/html-css-js-introduction/tree/js-objects 
// 1.1.	Takes following parameters
// 1.1.1.	nEmployees - Number of being created Employee objects
// 1.1.2.	idDigits – number of digits of an ID value, for example if idDigits equals 4, it means that the random ID values should be in the range [1000, 9999]
// 1.1.3.	minSalary – minimal salary value (a salary value that is less than minSalary cannot be)
// 1.1.4.	maxSalary – maximal salary value (a salary value that is greater than maxSalary cannot be)

function createRandomEmployees(nEmployees, idDigits, minSalary, maxSalary, minBirthYear, maxBirthYear) {
    arID = [];
    nId = 0;
    let arEmployees = [];
    for(let i = 0; i < nEmployees; i++) {
        let ID = generateID(idDigits);
        let name = 'name' + ID;
        salary = generateRandom(minSalary, maxSalary);
        birthYear = generateRandom(minBirthYear, maxBirthYear);
        arEmployees[i] = {ID, name, salary, birthYear};
    }
    return arEmployees; 
}

function generateID(digits) {
    let newID = 0;
    do {    
    let min = Math.pow(10, digits - 1);
    let max = Math.pow(10, digits) - 1;
    newID = generateRandom(min, max);
    } while (!checkUniqueID(newID));
    
    arID[nId++] = newID;
    return newID;
}

function checkUniqueID(ID) {
    let res = true;
return arID.every(num => {
    if(num == ID) {
        res = false;     
    }
    return res;
    })
}

function generateRandom(min, max) {
    return min + Math.trunc((max - min) * Math.random());

} 

// 2.	Write function getAverageAge returning a value of the average age of the Employee object
// 2.1.	Takes one parameter as an array of Employee objects
// 2.2.	Returns an average value of all age values
// 2.3.	Implementation hints
// 2.3.1.	Apply “reduce”
// 2.3.2.	Age value is computed as new Date().getFullYear() - empl.birthYear, 
// where new Date() returns Date object of the current date; 
// method getFullYear returns year value; 
// empl.birthYear - value of the birthYear of the employee referred by the reference empl

function getAverageAge(employees) {
    return Math.round(employees.reduce((res, empl) => {
        res += new Date().getFullYear() - empl.birthYear;
       return res;
    }, 0) / employees.length);
}

// 3.	Write function getEmployeesBySalary returning a sorted by salary array of the Employee object having the salary value in a given range
// 3.1.	Takes three following parameters
// 3.1.1.	Array of the Employee objects
// 3.1.2.	salaryFrom – minimal salary in a given range
// 3.1.3.	salaryTo – maximal salary in a given range
// 3.2.	 Returns the sorted by salary array of the Employee objects having salary in the range [salaryFrom, salaryTo]
// 3.3.	Implementation hints:
// 3.3.1.	Apply “filter” and “sort”

function getEmployeesBySalary(employees, salaryFrom, salaryTo) {
    return employees.filter(empl => empl.salary > salaryFrom && salaryTo > empl.salary)
                    .sort((empl1, empl2) => empl1.salary - empl2.salary);
}

// 4.	Write function increaseSalary increasing salary values of the Employee objects having salary less than a given value
// 4.1.	Takes three following parameters
// 4.1.1.	Array of the Employee objects
// 4.1.2.	borderSalary – salary value, the Employee objects having salary less which, will have a greater salary
// 4.1.3.	percent  - percent value, on which the salary values of the being found Employee objects should be increased, for example
// 4.1.4.	Example, borderSalary = 8000, percent = 10, Employee objects having salary less than 8000 will have on 10% greater salary, 
// for example an employee has salary 6000 after performing that function that employee will have salary 6600
// 4.1.5.	Implementation hints
// 4.1.5.1.	Apply “filter” and “map”

function increaseSalary(employees, borderSalary, percent) {
        employees.filter(empl => empl.salary < borderSalary).map(empl => {
        empl.salary *= (1 + percent / 100);
        empl.salary = Math.round(empl.salary);
        return empl;    
    });

           return employees;
}

let nEmployees = 6;
let idDigits = 4;
let minSalary = 5500;
let maxSalary = 16000
let minBirthYear = 1942;
let maxBirthYear = 2004;
let salaryFrom = 9000;
let salaryTo = 14000;
let borderSalary = 8000; 
let percent = 10;

const employees = createRandomEmployees(nEmployees, idDigits, minSalary, maxSalary, minBirthYear, maxBirthYear);
console.log('Arrey of employees', employees);
const averageAge = getAverageAge(employees); 
console.log('Average age:',averageAge);
const getEmployeesBy = getEmployeesBySalary(employees, salaryFrom, salaryTo);
console.log('Get employees by salary:', getEmployeesBy);
increaseSalary(employees, borderSalary, percent);
console.log('After increase salary', employees);