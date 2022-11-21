const str1 = 'yellow';
const str2 = 'wolley';

isAnagram(str1, str2);

function isAnagram(str1, str2) {
    
    // console.log(str1Ar);
    // str2Ar = Array.from(str2);
    const word1 = {};
    for(let i = 0;i < str1.length;i++) {
        if(word1[str1[i]]){
            word1[str1[i]]++;
        } else {
            word1[str1[i]] = 1;
        }
    }

    let str2Ar = Array.from(str2);    
    const word2 = {};
    str2Ar.forEach(elem => {
        if(word2[elem]) {
            word2[elem]++;
        } else {
            word2[elem] = 1;
        }
    })


    // console.log(word1);
   sumWord1 = Object.entries(word1);
   sumWord2 = Object.entries(word2);

   let sum = str2Ar.reduce((res, elem) => {
   if(word2[elem] == word1[elem]) {
    console.log(word2[elem]);
    console.log(word1[elem]);
    res++;
    console.log(res);
    return res;
   }   
   }, 0)

   if(sum == str1.length) {
    console.log(`${str1} is anagram to ${str2}`);
   }

   console.log(sum);

console.log(word1);
console.log(word2);
// console.log(Object.entries(word2));
// console.log(str2Ar);
}