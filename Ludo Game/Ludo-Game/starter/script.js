let score0 = document.getElementById('score--0');
let score1 = document.getElementById('score--1');
let current0 = document.getElementById('current--0');
let current1 = document.getElementById('current--1');
let dice = document.getElementById('dice');
let btnRoll = document.getElementById('btn--roll');
let btnHold = document.getElementById('btnHold');
let restart = document.getElementById('restart');

let currentScore,activePlayer,score,playing

function initialValues(){
    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;
    dice.classList.add('hidden')   
     currentScore = 0;
     activePlayer = 0;
     score = [0, 0]
     playing = true;
}
initialValues();

function switchPlayer(){
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    document.getElementById(`current--${activePlayer}`).textContent = 0
    // if(activePlayer === 0 ){
    //     activePlayer = 1;
    // } else{
    //     activePlayer = 0;
    // }
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active')
    currentScore = 0;
}

btnRoll.addEventListener('click', () => {

    if (playing) {
        let randomDice = Math.trunc(Math.random() * 6 + 1);
        dice.src = `dice-${randomDice}.png`
        dice.classList.remove('hidden')
        if (randomDice !== 1) {
            currentScore += randomDice
            console.log(currentScore)
            document.getElementById(`current--${activePlayer}`).textContent = currentScore
        } else {
        switchPlayer();        
        }
    }
})

btnHold.addEventListener('click', () => {
    score[activePlayer] += currentScore;

    if (score[activePlayer] >= 30) {
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        document.querySelector(`.player--${activePlayer}`).classList.toggle('player--winner')
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
        dice.classList.add('hidden')
        playing = false;
    } else {
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
        switchPlayer();
    }
})

restart.addEventListener('click', () => {
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner')
    document.querySelector(`.player--0`).classList.toggle('player--active')
initialValues();
})






