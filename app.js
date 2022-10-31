function fromNumberToString(number, base) {
    let result = "";
    let code = 0
    do {
        code = number % base;
        if(code >= 10 && base == 36) {
        code = String.fromCharCode(code + 87);
        }   
        result = code + result;
        number /= base;
        number = Math.trunc(number);
    }while (number != 0);
    return result;
}

function fromStringToNumber(string, base) {
    let code = "";
    let result = 0;
    for(let i = 0;i < string.length; i++) {
        code = string.charCodeAt(i) - 48;
        if(code >=10 && base == 36) {
            code -= 39;
        }
        result = result * base + code;
    }
    return result;
}

console.log(fromNumberToString(900550, 36));
console.log(fromNumberToString(46016237, 36));
console.log(fromNumberToString(11483, 2));

console.log(fromStringToNumber('java',36));
console.log(fromStringToNumber('react',36));
console.log(fromStringToNumber('10110011011011',2));