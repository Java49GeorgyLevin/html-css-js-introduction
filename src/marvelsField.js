const bankWords = ['empire', 'baroque', 'rococo', 'modern']
const bankQuestions = [
    "An early-nineteenth-century design movement in architecture, furniture, other decorative arts, and the visual arts, representing the second phase of Neoclassicism. It flourished between 1800 and 1815 during the Consulate and the First French Empire periods, although its life span lasted until the late-1820's.",
    "A style of architecture, music, dance, painting, sculpture, poetry, and other arts that flourished in Europe from the early 17th century until the 1750's.",
    "An exceptionally ornamental and theatrical style of architecture, art and decoration which combines asymmetry, scrolling curves, gilding, white and pastel colours, sculpted moulding, and trompe-l'œil frescoes to create surprise and the illusion of motion and drama.",
    "A style of architecture, art, and design that first emerged in the United Kingdom in the mid-1880's."
]
const TRIALS = 3;
const whatW = document.querySelector(".what-word")
const sectionElement = document.querySelector(".word-guess")
const tryingLeft = document.querySelector(".count-down")
const victoryMessage = document.querySelector(".win-alert")
const input = document.querySelector(".input")
const HIDDEN = "hidden";
const OPEN = "open";
const pA = document.querySelector(".play-again")
const QST = document.querySelector(".question")
input.classList.add(HIDDEN);

function playAgain() {
    victoryMessage.innerHTML = '';
    tryingLeft.innerHTML = `You have ${TRIALS} trials for letters.`
    N = chooseWord();
    word = bankWords[N];
    question = bankQuestions[N];
    N_LETTERS = word.length;
    nTry = TRIALS;
    sectionElement.innerHTML = getDivsElements();
    QST.innerHTML = question;
    input.classList.remove(HIDDEN);
    document.querySelector('.input-letter').classList.remove(HIDDEN);
    pA.classList.add(HIDDEN);
    whatW.innerHTML = `(${word} :בדיקה)`;
}

function getDivsElements() {
    let wordAr = Array.from(word);
    let res = wordAr.map(letter => `<div class="letter-guess">${letter}</div>`);
    return res.join('');
}

function onChangeLetter(event) {
    const letterGuess = event.target.value;
    event.target.value='';
    if (letterGuess.length != 1) {
        alert('You only need to enter one letter.');
    } else {
        openFields(letterGuess);
    }
    --nTry;
    countDown(nTry);
}

function onChangeWord(event) {
    const wordGuess = event.target.value;
    event.target.value='';
    if (wordGuess.length != N_LETTERS) {
        alert(`A word should contain ${N_LETTERS} letters`);
        loose();
    } else {
        const wordGuessAr = Array.from(wordGuess);
        wordGuessAr.forEach((l, i) => openFields(l));
        wordGuess === word ? winAlert() : loose();                
    }
    clean();
}

function countDown(lTry) {
    tryingLeft.innerHTML = `You have ${lTry} trials for letters.`
    if(lTry == 0) {
        victoryMessage.innerHTML = 'Enter the whole word.';
        document.querySelector('.input-letter').classList.add(HIDDEN);
    }        
}

function winAlert() {
        victoryMessage.innerHTML = 'You are win!';
}

function loose() {
    victoryMessage.innerHTML = 'You are loose :(';
}

function clean() {
    pA.innerHTML = 'Play again!';
    pA.classList.remove(HIDDEN);
    input.classList.add(HIDDEN);
    tryingLeft.innerHTML = '';
    QST.innerHTML = '';    
}

function chooseWord() {
return Math.floor(Math.random() * bankWords.length);
}

function openFields(letterGuess) {
    const wordAr = Array.from(word);
    const letterElements = document.querySelectorAll(".letter-guess");
    wordAr.map((l, i) => {
            if(l === letterGuess) {
            letterElements[i].classList.add(OPEN);
            }
        })
}