'use strict';
//#region
// Selecting elements
// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');
// const score0El = document.querySelector('#score--0');
// const score1El = document.getElementById('score--1');
// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1');

// const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// // OLD Starting conditions
// // score0El.textContent = 0;
// // score1El.textContent = 0;
// // diceEl.classList.add('hidden');

// // const scores = [0, 0];
// // let currentScore = 0;
// // let activePlayer = 0;
// // let playing = true;

// // PART OF INSTRUCTORS ANSWER

// let currentScore, scores, activePlayer, playing;
// const init = function () {
//   // New Starting Condition
//   scores = [0, 0];
//   currentScore = 0;
//   activePlayer = 0;
//   playing = true;

//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   current0El.textContent = 0;
//   current1El.textContent = 0;

//   diceEl.classList.add('hidden');
//   player0El.classList.remove('player--winner');
//   player1El.classList.remove('player--winner');
//   player0El.classList.add('player--active');
//   player1El.classList.remove('player--activer');
// };
// init();

// // Function that switch players
// const switchPlayer = function () {
//   currentScore = 0;
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   activePlayer = activePlayer === 0 ? 1 : 0;

//   player0El.classList.toggle('player--active');
//   player1El.classList.toggle('player--active');
// };

// // Rolling dice functionality
// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     // 1. Generating a random dice roll
//     const dice = Math.trunc(Math.random() * 6) + 1;

//     // 2. Display dice
//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;

//     // 3. Check for rolled 1
//     if (dice !== 1) {
//       // Add dice to current score
//       currentScore += dice;
//       document.getElementById(`current--${activePlayer}`).textContent =
//         currentScore;
//     } else {
//       // Switch to next player
//       switchPlayer();
//     }
//   }
// });

// // Holding the value, adding to the main score
// btnHold.addEventListener('click', function () {
//   if (playing) {
//     // 1. Add current score to active players score
//     scores[activePlayer] += currentScore;

//     Number(
//       (document.getElementById(`score--${activePlayer}`).textContent =
//         scores[activePlayer])
//     );
//     // 2. Check if player's score >= 100
//     if (scores[activePlayer] >= 10) {
//       // Finish the game
//       playing = false;
//       diceEl.classList.add('hidden');
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add('player--winner');
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.remove('player--active');
//     } else {
//       // 4. Switch to the next player
//       switchPlayer();
//     }
//   }
// });

// // Resetting the game
// // MY ANSWER
// //btnNew.addEventListener('click', function () {
// //     playing = true;
// //     diceEl.classList.remove('hidden');
// //     document
// //       .querySelector(`.player--${activePlayer}`)
// //       .classList.remove('player--winner');
// //     document
// //       .querySelector(`.player--${activePlayer}`)
// //       .classList.add('player--active');
// //     diceEl.classList.add('hidden');
// //     score0El.textContent = 0;
// //     score1El.textContent = 0;
// //     current0El.textContent = 0;
// //     current1El.textContent = 0;
// //     currentScore = 0;
// //INSTRUCTORS ANSWER
// // });

// btnNew.addEventListener('click', init());

//#endregion
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
