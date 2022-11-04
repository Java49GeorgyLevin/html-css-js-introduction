// let strTZ = "346524341";
// arStrTz = Array.from(strTZ);

// function println(element, index, array) {
//     console.log("element at index ", index, element);
// }
// arStr.forEach(println);
// let arCodeAscii = arStr.map(function(symbol, index) {
//     return index % 2 == 0 ? symbol.charCodeAt() : symbol;
// })

function checkTeudatZehut(strTZ) {
    console.log("Number getting ", strTZ);
    arStrTz = Array.from(strTZ);
    let evenOdd = "";
    let sum = 0;
    let checkIndex = arStrTz.map(function(num, index) {
        num = index % 2 == 0 ? num : num * 2;
        num = Math.trunc(num/10) + num % 10;
        // console.log(index);
        // console.log(num);
        evenOdd += num;
        // console.log(evenOdd);
        sum += +num;
        // console.log(sum);      
    })
    // console.log(evenOdd);
    // console.log(sum);
    return sum % 10 == 0 ? true : false;   
}

function generateRandomTeudatZehut() {
    let TZ = [];
    for(let i = 0; i < 8; i++) {
        TZ[i] = Math.round(Math.random() * 9)
    }
    let sum8 = TZ.reduce(function(sum, curr) {
        return sum + curr;
    }, 0)
    // console.log(sum8);
    TZ[8] = sum8 % 10 == 0 ? 0 : 10 - sum8 % 10;
    let str9 = TZ.reduce(function(sum, curr) {
        return sum + curr;
    }, "")
    // TZ[8] = 0;
    // let fullTZ = TZ.map(function(num, index) {
    //     TZ[index] = Math.round(Math.random() * 9);
    //     console.log(num);
    //     if(index == 8) return;
    // })
    return str9;
}
    //TODO
    //returns string of 9 symbols matching checkTeudatZehut
    //make 8 random digits from 0 to 9
    //9 - th symbol should be with accordance of matching
    //to get random digit Math.round(Math.random() * 9)
// }

// console.log('GTZ =', generateRandomTeudatZehut());
// console.log(checkTeudatZehut(540469381));
// console.log('GTZ =', generateRandomTeudatZehut(), 
//         'ChTZ =', checkTeudatZehut(generateRandomTeudatZehut()));
NumGR = generateRandomTeudatZehut();
console.log('NumGR = ',NumGR);
console.log(checkTeudatZehut(NumGR));
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

