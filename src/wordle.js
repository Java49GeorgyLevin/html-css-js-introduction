const bankWords = ['puppy', 'apple', 'hyppo', 'hypno']
word = chooseWord();
const N_LETTERS = 5;
const TRIALS = 6;
nTry = TRIALS;
const whatW = document.querySelector(".what-word")
const letterElements = document.querySelectorAll(".letter-guess")
const tryingLeft = document.querySelector(".count-down")
const victoryMessage = document.querySelector(".win-alert")
const HIDDEN = "hidden";
const inputW = document.querySelector(".input")
const pA = document.querySelector(".play-again")
pA.classList.add(HIDDEN);
function onChange(event) {
    whatW.innerHTML = `(${word} :בדיקה)`;
    const wordGuess = event.target.value;
    event.target.value='';
    if (wordGuess.length != N_LETTERS) {
        alert(`A word should contain ${N_LETTERS} letters`);
        --nTry;
        countDown(nTry);
    } else {
        const wordAr = Array.from(wordGuess);
        wordAr.forEach((l, i) => letterElements[i].innerHTML = l)
        const colors = wordAr.map((l, i) => {
           let index = word.indexOf(l);
           let res = 'red';
            if(index  > -1) {
            res = l == word[i] ? 'green' : 'yellow'
            }           
            return res;
        })
        colors.forEach((c, i) =>
         letterElements[i].style.color=c);
         winAlert(wordGuess);
    }
}

function countDown(lTry) {
    tryingLeft.innerHTML = `You have ${lTry} trials.`
    if(lTry == 0) {
        victoryMessage.innerHTML = 'You are loose : (';
        clean();
    }        
}

function winAlert(wordGuess) {
    if(wordGuess === word) {
        victoryMessage.innerHTML = 'You are win!';
        clean(); 
    }
    else {
        victoryMessage.innerHTML = 'Try again!';
        --nTry;
        countDown(nTry);
    }    
}

function clean() {
    tryingLeft.innerHTML = '';
    inputW.classList.add(HIDDEN);
    pA.classList.remove(HIDDEN);
    nTry = TRIALS;
  //  chooseWord();
}

function chooseWord() {
word = bankWords[Math.floor(Math.random() * bankWords.length)]
return word;
}
function playAgain() {
    victoryMessage.innerHTML = '';
    document.querySelectorAll(".letter-guess").innerHTML = '?';

    for(let i = 0; i < letterElements.length; i++) {
        letterElements[i].innerHTML = '';
    }    
    
    tryingLeft.innerHTML = `You have ${TRIALS} trials.`
    chooseWord();
    pA.classList.add(HIDDEN);
    inputW.classList.remove(HIDDEN);
    whatW.innerHTML = `(${word} :בדיקה)`;
}