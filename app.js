
function checkTeudatZehut(teudatStrNumber) {
            // console.log("Number getting ", teudatStrNumber);
    arStrTz = Array.from(teudatStrNumber);
            // function println(element, index, array) {
            //     console.log("element at index ", index, element);
            // }
            // arStrTz.forEach(println);

    let evenOdd = "";
    let sum = 0;
    let checkIndex = arStrTz.map(function(num, index) {
        num = index % 2 == 0 ? num : num * 2;
        num = Math.trunc(num/10) + num % 10;
            // console.log("index = ", index,' num = ',num);
            // console.log('num = ',num);
        evenOdd += num;
            // console.log(evenOdd);
        sum += +num;
            // console.log(sum);      
    })
    console.log(evenOdd);
    console.log(sum);
    return sum % 10 == 0 ? true : false;   
}

function generateRandomTeudatZehut() {
    let TZ = [];
    for(let i = 0; i < 8; i++) {
        TZ[i] = Math.round(Math.random() * 9)
    }
    let sum8 = TZ.reduce(function(sum, curr, index) {
        curr = index % 2 == 0 ? curr : 2 * curr;
        curr = Math.trunc(curr/10) + curr % 10;
        return sum + curr;
    }, 0)
            // console.log(sum8);
    TZ[8] = sum8 % 10 == 0 ? 0 : 10 - sum8 % 10;
    let str9 = TZ.reduce(function(sum, curr) {
        return sum + curr;
    }, "")
    return str9;
}
 
NumGenRan = generateRandomTeudatZehut();
console.log('NumGenRan = ',NumGenRan);
console.log(checkTeudatZehut(NumGenRan));

console.log('346524341 is ',checkTeudatZehut('346524341'));
console.log('346524342 is ',checkTeudatZehut('346524342'));
console.log('346524343 is ',checkTeudatZehut('346524343'));