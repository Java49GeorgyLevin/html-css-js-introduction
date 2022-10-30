function sumDigits(number) {
    if(number < 0)
    number = Math.abs(number);
    number = Math.trunc(number);
    let sum = 0;
    do {
        let digit = number % 10;
        number = (number - digit) /10; 
        sum += digit;             
    }
    while(number != 0);
    return sum; 
}
console.log(sumDigits(-1236.61));