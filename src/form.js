const currentYear = new Date().getFullYear();
const earliestYear = 1950;
const minSalary = 1000;
const maxSalary = 40000;
const RED_BORDER = "red-border";
const GREEN_BORDER = "green-border";
const warning = document.querySelector(".alert");
const inputElements = document.querySelectorAll(".form-class [name]");
const timeout = 5000;

// inputElements.classList.add(GREEN_BORDER);
// document.querySelectorAll(".form-class [id]").add(GREEN_BORDER);
// почему не работают такие выражения?

function onSubmit(event) {
    event.preventDefault();
    console.log("submitted");
    const employee = Array.from(inputElements).reduce(
        (res, cur) => {
            res[cur.name] = cur.value;

            // console.log('cur', cur);
            // console.log('res', res);
            // Почему уже при первом проходе reduce объект res содержит все данные?
            // console.log('cur.name', cur.name);
            // console.log('cur.value', cur.value);

            return res;
        }, {}
    )
    console.log(employee)
}
function onChange(event) {
    const param = event.target.name;
    event.target.classList.remove(RED_BORDER);
    const magnitude = event.target.value;
    let check = paramSelector(param, magnitude);

    if(check == false) {
        event.target.classList.add(RED_BORDER);        
        event.target.value='';
    }
}

function paramSelector(param, magnitude) {
    let check = true;
    switch(param) {
        case "employee_name": check = checkEmployeeName(magnitude);
        break;
        case "birthDate": check = checkbirthDate(magnitude);
        break;
        case "salary": check = checkSalary(+magnitude);
        break;
    }
    return check;
}

function checkEmployeeName(magnitude) {
    let check = true;
    if(magnitude.length < 1 ||
        magnitude.substring(0, 1) == ' ') {
        check = false;
        warningMessage(`Entered <b>name</b> is wrong.<br>
        The name must contain at least one letter.`);
    }
    return check;
}

function checkbirthDate(magnitude) {
    let check = true;
    if(+magnitude.slice(0, 4) < earliestYear ||
        +magnitude.slice(0, 4) > currentYear) {
        check = false;
        warningMessage(`Entered value of <b>birthyear</b> is wrong.<br>
        The value must be between ${earliestYear} & ${currentYear}.`);
    }
    return check;
}

function checkSalary(magnitude) {
    let check = true;
    if(magnitude < minSalary || magnitude > maxSalary){
        check = false;
        warningMessage(`Entered value of <b>salary</b> is wrong.<br>
        The value must be between ${minSalary} & ${maxSalary}.`);
    }
    return check;
}

function warningMessage(str) {
    warning.innerHTML = str;
    setTimeout(() =>  {
        warning.innerHTML = '';
    }, timeout);
}