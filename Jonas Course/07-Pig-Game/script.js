'use strict';

// Game data
let currentScore;
let currentPlayer;
const scores = [0, 0];
const GameState = Object.freeze({
    PLAYING: "PLAYING",
    ENDED: "ENDED"
});
let gameState;

// Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Initial state
const init = function() {
    scores[0] = 0;
    scores[1] = 0;
    currentScore = 0;
    currentPlayer = 0;
    gameState = GameState.PLAYING;
    
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    
    diceEl.classList.add('hidden');
    player1El.classList.remove('player--winner'); 
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--active'); 
    player0El.classList.add('player--active');
    
    document.getElementById('name--0').textContent = 'Player 1';
    document.getElementById('name--1').textContent = 'Player 2';

};
init();

// Switching player function
const switchPlayer = function() {
    document.getElementById(`current--${currentPlayer}`).textContent = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    currentPlayer = currentPlayer ^ 1;
    currentScore = 0;
};

// Rolling Functionality
btnRoll.addEventListener('click', function() {
    if (gameState === GameState.PLAYING) {   
        // Reset the dice shadow
        diceEl.classList.remove('diceOne');
        // Generate random number 
        const dice = Math.floor(Math.random() * 6 + 1);
        // Display it 
        diceEl.classList.remove('hidden');
        diceEl.setAttribute('src', `dice-${dice}.png`)
        
        // Check if it's 1, switch to other player
        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${currentPlayer}`).textContent = currentScore; 
        } else {
            switchPlayer();
            diceEl.classList.add('diceOne');
        }
    } else { 
        alert('Start a new game =P');
    }
});

btnHold.addEventListener('click', function() {
    if (gameState === GameState.PLAYING) {
        scores[currentPlayer] += currentScore;
        document.getElementById(`score--${currentPlayer}`).textContent = scores[currentPlayer];
        if (scores[currentPlayer] >= 20) {
            document.querySelector(`.player--${currentPlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${currentPlayer}`).classList.remove('player--active');
            document.querySelector(`#name--${currentPlayer}`).textContent = `Player ${currentPlayer + 1} Wins`;
            document.getElementById(`current--${currentPlayer}`).textContent = 0;  
            gameState = GameState.ENDED;
            diceEl.classList.add('hidden');
        } else {
            switchPlayer();    
        }
    } else {
        alert('Start a new game =P');
    }
});

btnNew.addEventListener('click', init);