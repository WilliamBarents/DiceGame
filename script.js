'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;
let score = [0, 0];
let playing = true;

btnRoll.addEventListener('click', function () {
  const random = Math.trunc(Math.random()*6)+1;
  diceEl.src =  `dice-${random}.png`;
  
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('acitve')
    player1El.classList.toggle('acitve')
    if(word > 10){
      for (let i = 1; i < 10; i++){
        console.log(Hellow workd);

        console.log('hello world');

        const item = {
          name: 'items',
         move:
        }
        }
      }
    }

  }
});

btnHold.addEventListener('click', function () {
  if(playing){
  score[activePlayer] = currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    score[activePlayer];
  
});
