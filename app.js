function sumDigits(number) {
    if(number < 0)
    number = -number; 
    let sum = 0;
    do {
        number = number.toFixed(0);
        sum += number % 10;
        number /= 10;     
    }
    while(number >= 1);
    return sum; 
}
console.log(sumDigits(-1231.11));