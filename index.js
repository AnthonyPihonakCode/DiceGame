const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player1 = document.querySelector('.player--1');
const player0 = document.querySelector('.player--0');

let scores, currentScore, activePlayer, playing;

const init = function() {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    score0.textContent = 0;
    score1.textContent = 0;
    diceEl.classList.add('hidden');
    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
}
init();

const switchPlayer = function() {
    
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0; // switch player 0 to 1 unless 1 is active player
    currentScore = 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function() {
    if(playing){
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `./image/dice-${dice}.png`;
    if(dice != 1){
        currentScore += dice; 
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        
        

    }else{
       switchPlayer();
    }
    }
})

btnHold.addEventListener('click', function() {
    if (playing) {
    scores[activePlayer] += currentScore; 
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    if(scores[activePlayer] >= 30) {
        diceEl.classList.add('hidden');
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
        alert(`Player ${activePlayer + 1} Wins!`)
    }else{
        switchPlayer();
    }
}
})

btnNew.addEventListener('click', init);
   

    
    