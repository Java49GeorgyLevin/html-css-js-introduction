// 1. Write function ulSurround that surrounds array of strings inside <ul></ul> element. 
//    1.1 Example of input array
//           let strings=["abc","lmn","cd"]
//     1.2 Output array for the above example- let ulSurrounding=ulSurround(strings)
//           ["<ul>","<li>abc</li>","<li>lmn</li>","<li>cd</li>","</ul>"]
function ulSurround (array) {
    let ulArray = array.map(function(e){
        return '<li>' + e + '</li>';
    })
    ulArray.push('</ul>');
    ulArray.splice(0, 0, '<ul>');
    return ulArray;
}

// 2. Write function count that returns how many times a given element encountered in a given array
//    2.1 Example of input array
//        let strings=["abc","lmn","cd","abc","abc"]
//     2.2 Output for the above example count(strings,"abc") will be 3 and count(strings,"ab") will be 0
function count(strings2, givenElement) {
    return strings2.reduce(function(res, e) {
        if(givenElement == e) ++res;
        return res;
    }, 0)    
}

// 3. Write function arrayCopy that gets the following parameters : function arrayCopy(src,srcPos,dst,dstPos,length) {....}
// where: src - source array, srcPos - index of the source array, dst - array destination, dstPos - index of destination array,
// length - number of elements. This function should copy length elements from source array beginning from srcPos index to
// destination array from dstPos index
// Example: let arS = [1,2,3,4,5,6,7]; let arD = [10,20,30,40,50,60,70]
// arrrayCopy(arS, 3, arD, 4, 3); Result: arS is not updated, arD = [10,20,30,40,4,5,6,50,60,70]
function arrayCopy(arS, srcPos, arD, dstPos, length) {
let exportArS = arS.slice(srcPos, srcPos + length + 1);
let importArD = arD.slice(0, arD.length);
for(let i = 0; i < length; i++) {
    importArD.splice(dstPos + i, 0, exportArS[i]);
}
return importArD;
}

// 4. Write function move(array,index,offset) that in a given array moves element at a given index on a given offset positions (if offset > 0 -> to right, otherwise to left).
//   Examples: let numbers=[1,2,3,4,5,6,7]; move(numbers,3,-1) -> numbers=[1,2,4,3,5,6,7]; (element at index 3 (4) is moved on 1 position left)
// move(numbers,2,4)->numbers=[1,2,4,5,6,7,3]. (element at index 2 (3) is moved on 4 positions right) 
// Note: all examples imply the original array of numbers ( let numbers=[1,2,3,4,5,6,7])
function move(numbers,index,offset) {
    let movNum = numbers.splice(index, 1)[0];
    numbers.splice(index + offset, 0, movNum);
    return numbers;

}

let numbers=[1,2,3,4,5,6,7];
let index = 3;
let offset = 2;
console.log(move(numbers, index, offset));

let arS = [1,2,3,4,5,6,7]; 
let arD = [10,20,30,40,50,60,70]
let srcPos = 3;
let dstPos = 4;
let length = 3;
console.log(arrayCopy(arS, srcPos, arD, dstPos, length));

let strings2=["abc","lmn","cd","abc","abc"];
let givenElement = "abc";
console.log(count(strings2, givenElement));

let strings1=["abc","lmn","cd"];
console.log(ulSurround(strings1));