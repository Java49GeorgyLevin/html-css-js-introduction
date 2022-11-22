const word = 'yellow';

function isAnagram(str1, str2) {
    if(str1.length != str2.length) {
        // noAnagram(str1,str2);
        return `${str2} is no anagram ${word}. Other length.`
    } else {
    const word1 = countLetters(str1);
    const word2 = countLetters(str2);
   
    let str2Ar = Array.from(str2);    

    let sum = str2Ar.reduce((res, elem) => {
    if(word2[elem] != word1[elem]) {
    console.log(elem, word1[elem]);
    res = 1;
    console.log(res);
    return res;
   }   
   }, 0)

//    let yesOrNo = sum == 0 ? yesAnagram(str1,str2) : noAnagram(str1,str2);
   // console.log("Other quantati of letters.");
//    }
//    }

//    console.log(sum);

// console.log(word1);
// console.log(word2);
// console.log(Object.entries(word2));
// console.log(str2Ar);
    // }
    return sum == 0 ? `${str2} true anagram ${word}` : `${str2} false anagram ${word}. Other number of letters.`;
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

// console.log(isAnagram(word,"weloly"));
// console.log(isAnagram(word, "weloly"))
console.log(isAnagram(word, "leloyw"));
// console.log(isAnagram(word, "wolley"))
// console.log(isAnagram(word, "weloyl"))
// console.log(isAnagram(word, "weloll"))
// console.log(isAnagram(word, "leloy"))
// console.log(isAnagram(word, "wollet"))
// console.log(isAnagram(word, "weloyo"))