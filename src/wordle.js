const word = "puppy"
const N_LETTERS = 5;
const TRIALS = 6;
nTry = TRIALS;
const letterElements = document.querySelectorAll(".letter-guess")
const tryingLeft = document.querySelector(".count-down")
const victoryMessage = document.querySelector(".win-alert")
function onChange(event) {
    const wordGuess = event.target.value;
    event.target.value='';
    if (wordGuess.length != N_LETTERS) {
        alert(`A word should contain ${N_LETTERS} letters`);
        --nTry;
        countDown(nTry);
    } else {
        const wordAr = Array.from(wordGuess);
        winAlert(wordGuess);

        wordAr.forEach((l, i) => letterElements[i].innerHTML = l)
        const colors = wordAr.map((l, i) => {
           let index = word.indexOf(l);
           let res = 'red';
            if(wordAr[i] == Array.from(word)[i]) {
                res = 'green';
            } else if(index  > -1) { 
                res = 'yellow'
            }           
            return res;
        })
        colors.forEach((c, i) =>
         letterElements[i].style.color=c);
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
    nTry = TRIALS;
}