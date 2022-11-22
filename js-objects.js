const word = 'yellow';

function isAnagram(str1, str2) {
    if(str1.length != str2.length) {
        return 'Other length';    
    } else {
    const word1 = countLetters(str1);
    const word2 = countLetters(str2);

//    console.log(Object.entries(word1).sort());
//    console.log(Object.entries(word2).sort());

    let str2Ar = Array.from(str2);    
    let flag = true;
    str2Ar.forEach(elem => {
        if(word2[elem] != word1[elem]) {
            flag = "Other amount of letters";
        }
    })
    return flag;
    }
}

function countLetters(str) {
   const wordCount = {};
    for(let i = 0;i < str.length;i++) {
        if(wordCount[str[i]]){
            wordCount[str[i]]++;
        } else {
            wordCount[str[i]] = 1;
        }
    }
    return wordCount;
}

console.log(word, '& weloly:',isAnagram(word,"weloly"));
console.log(word, '& weloly:',isAnagram(word, "weloly"))
console.log(word, '& leloyw:',isAnagram(word, "leloyw"));
console.log(word, '& wolle:',isAnagram(word, "wolley"))
console.log(word, '& weloyl:',isAnagram(word, "weloyl"))
console.log(word, '& weloll:',isAnagram(word, "weloll"))
console.log(word, '& leloy:',isAnagram(word, "leloy"))
console.log(word, '& wollet:',isAnagram(word, "wollet"))
console.log(word, '& weloyo:',isAnagram(word, "weloyo"))