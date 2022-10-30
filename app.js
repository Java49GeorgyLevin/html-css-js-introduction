// // function sumDigits(number) {
// //     if(number < 0)
// //     number = Math.abs(number);
// //     number = Math.trunc(number);
// //     let sum = 0;
// //     do {
// //         let digit = number % 10;
// //         number = (number - digit) /10; 
// //         sum += digit;             
// //     }
// //     while(number != 0);
// //     return sum; 
// // }
// // console.log(sumDigits(-1236.61));

// /* CW12 */
// let strNum1 = "123";
// let strNum2 = "9";
// console.log(strNum1 + strNum2);
// console.log(strNum1 - strNum2);
// console.log(strNum1 > strNum2);
// //conversions from string to number
// let num1 = +strNum1;
// let num2 = +strNum2;
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 > num2);
// let strNumStr = '12.3ab';
// let numStr = +strNumStr;
// console.log(numStr);
// let num = parseFloat(strNumStr);
// console.log(num);
// if(isNaN(numStr)) {
//     console.log("numStr is NaN");
// }
let num10 = 123;
let strNum10 = "" + num10;
// 123.toString();
let strNum16 = num10.toString(16);
console.log(strNum10, strNum16);