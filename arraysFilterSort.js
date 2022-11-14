// 1.	Write function minMax(numbers)  
// 1.1.	Takes array of numbers
// 1.2.	Returns array containing two numbers: first is minimal value , second is maximal value form input array
// 1.3.	Example: minMax([1, 2, 3, 4, 5]) returns array [1, 5]
// 1.4.	Implementation Requirements
// 1.4.1.	Apply the reduce pattern for getting result array by one “reduce” method 
function minMax(numbers) {
return arMinMax = numbers.reduce((arMinMax, e) => {
if(arMinMax[0] > e) {arMinMax[0] = e}
else if(arMinMax[1] < e) {arMinMax[1] = e};
return arMinMax;
}, [numbers[0],numbers[0]])
}

// 2.	Write function deleteWithPrefix(strings, prefix)
// 2.1.	Takes array of strings and a prefix value
// 2.2.	Returns array containing the strings from the input array without strings starting with a given prefix
// 2.3.	Example: deleteWithPrefix([“abc”, “old_abc”, “lmn”, “123”, “old_lmn”], “old_”) returns array [“abc”, “lmn”, “123”]
function deleteWithPrefix(strings, prefix) {
return stringsWithoutPrefix = strings.filter(str => !str.startsWith(prefix));
// map(e => e.replace(prefix, ''));
}


// 3.	Write function getSortedEvenOdd(numbers)
// 3.1.	Takes array of numbers 
// 3.2.	Returns array sorted in the following order
// 3.2.1.	First numbers should be the even ones in the ascending order
// 3.2.2.	Last numbers should be the odd ones in the descending order
// 3.3.	The input array of numbers must not been updated
// 3.4.	Example: getSortedEvenOdd(numbers) returns new array with no update of “numbers”. let numbers=[1,6,3,8,5,2,7,4] then being returned array will be [2, 4, 6, 8, 7, 5, 3, 1]
function getSortedEvenOdd(numbers) {

//  let arEven = numbers.filter(n => n % 2 == 0 );
//  let arOdd = numbers.filter(n => n % 2 != 0);
//  arEven.sort((a, b) => a - b);
//  arOdd.sort((a, b) => b - a);
// let arEvenOdd = arEven.concat(arOdd);

// console.log('arEven = ',arEven);
// console.log('arOdd = ',arOdd);
// console.log('arEvenOdd = ',arEvenOdd);

return arEvenOdd = numbers.sort((a, b) => {
    let res = 1;
    if(a % 2 == 0 && b % 2 != 0) {res = -1}
    else if(a % 2 == 0 && b % 2 == 0) {res = a - b}
    else if(a % 2 != 0 && b % 2 != 0) {res = b - a}
    return res;
})
}

let numbers = [1, 2, -5, 99, 3, 4, 5];
console.log(minMax(numbers));

let arPrefix = ["abc", "old_abc", "lmn", "123", "old_lmn"];
let prefix = 'old_';
console.log(`arPefix = ${arPrefix} arWithoutPrefix = ${deleteWithPrefix(arPrefix, prefix)}`);

let numbersF3=[1,6,3,8,5,2,7,4];
console.log(`arBefore = ${numbersF3} arAfter = ${getSortedEvenOdd(numbersF3)}`)