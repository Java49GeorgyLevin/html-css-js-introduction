// 1.	Write function createRandomEmployees that creates array of a given number of the random Employee objects. The factory method createEmployee that creates one Employee object by the given parameters has been written at CW #19 https://github.com/Java49Telran/html-css-js-introduction/tree/js-objects 
// 1.1.	Takes following parameters
// 1.1.1.	nEmployees - Number of being created Employee objects
// 1.1.2.	idDigits – number of digits of an ID value, for example if idDigits equals 4, it means that the random ID values should be in the range [1000, 9999]
// 1.1.3.	minSalary – minimal salary value (a salary value that is less than minSalary cannot be)
// 1.1.4.	maxSalary – maximal salary value (a salary value that is greater than maxSalary cannot be)

function createRandomEmployees(nEmployees, idDigits, minSalary, maxSalary) {
    let arEmployees = [];
    for(let i = 0; i < nEmployees; i++) {
        let ID = generateID(idDigits);
        let name = 'name' + ID;
        salary = generateSalary(minSalary, maxSalary);
        arEmployees[i] = {ID, name, salary};
    }
    return arEmployees; 
}

function generateID(digits) {
    let min = Math.pow(10, digits - 1);
    let max = Math.pow(10, digits) - 1;
    return min + Math.trunc((max - min) * Math.random());
}

function generateSalary(min, max) {
    return min + (max - min) * Math.random().toFixed(2);
}

let nEmployees = 6;
let idDigits = 4;
let minSalary = 7500;
let maxSalary = 25000
const company = createRandomEmployees(nEmployees, idDigits, minSalary, maxSalary);
console.log(company);