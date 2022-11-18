const bankWords = ['empire', 'aroque', 'rococo', 'modern']
const bankQuestions = [
    "An early-nineteenth-century design movement in architecture, furniture, other decorative arts, and the visual arts, representing the second phase of Neoclassicism. It flourished between 1800 and 1815 during the Consulate and the First French Empire periods, although its life span lasted until the late-1820's.",
    "A style of architecture, music, dance, painting, sculpture, poetry, and other arts that flourished in Europe from the early 17th century until the 1750's.",
    "An exceptionally ornamental and theatrical style of architecture, art and decoration which combines asymmetry, scrolling curves, gilding, white and pastel colours, sculpted moulding, and trompe-l'œil frescoes to create surprise and the illusion of motion and drama.",
    "A style of architecture, art, and design that first emerged in the United Kingdom in the mid-1880's."
]
N = chooseWord();
word = bankWords[N];
question = bankQuestions[N];
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
const QST = document.querySelector(".question")
QST.innerHTML = question;
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
return Math.floor(Math.random() * bankWords.length);
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