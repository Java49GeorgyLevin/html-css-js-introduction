let strTZ = "346524341";
arStrTz = Array.from(strTZ);

// function println(element, index, array) {
//     console.log("element at index ", index, element);
// }
// arStr.forEach(println);
// let arCodeAscii = arStr.map(function(symbol, index) {
//     return index % 2 == 0 ? symbol.charCodeAt() : symbol;
// })

function checkTeudatZehut(arStrTz) {
    let evenOdd = "";
    let sum = 0;
    let checkIndex = arStrTz.map(function(num, index) {
        num = index % 2 == 0 ? num : num * 2;
        num = parseInt(num/10) + num % 10;
        console.log(index);
        console.log(num);
        evenOdd += num;
        console.log(evenOdd);
        sum += +num;
        console.log(sum);      
    })        
    return sum % 10 == 0 ? true : false;   
}

console.log(checkTeudatZehut(arStrTz));
// console.log(arStr, arCodeAscii);
// let sumAscii = arStr.reduce(function(res, cur) {
//     return res + cur.charCodeAt();
// }, 0)
// console.log("sum of ascii ", sumAscii)
// console.log(arStr.reduce(function(res, cur) {
// return res + cur
// }, ""));

// function checkTeudatZehut(teudatStrNumber) {
    //TODO
    //control sum of for even index digit value, for odd index digit * 2
    //control sum should be divide on 10 with no remainder
    //example 123456782 => 1 + 4 +3 + 8 +5 + 3 + 7 + 7 + 2 => true
    //    123456783 => 1 + 4 +3 + 8 +5 + 3 + 7 + 7 + 3 => false
// }
// function generateRandomTeudatZehut() {
    //TODO
    //returns string of 9 symbols matching checkTeudatZehut
    //make 8 random digits from 0 to 9
    //9 - th symbol should be with accordance of matching
    //to get random digit Math.round(Math.random() * 9)
// }

