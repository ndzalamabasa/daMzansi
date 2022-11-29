import { avatarArray } from './avatarArray.js';
import { avatar, cardsArray, move, user } from './game_controllers.js';
import {
  showPopUp,
  addCardsToBoard,
  rollDiceResults,
  rollDice,
} from './helper_functions.js';
import { domElements } from './helper_objects.js';
const { board, popUp, rollDiceButton } = domElements;
let userAvatar = new URLSearchParams(window.location.search).get('avatar');
avatar.setAttribute('src', userAvatar);

// user.setUserAvatar()
rollDiceButton.addEventListener('click', rollDice);

addCardsToBoard(cardsArray).forEach((card) => {
  // <<<<<<< HEAD
  board.appendChild(card);
});
// =======
//   board.appendChild(card)
// })

// function rollDice() {
//   console.log(avatar)
//   avatar.setAttribute('src', user.userAvatar)

//   showPopUp()
//   const dice = document.createElement('img')
//   dice.setAttribute('src', './assets/images/dice.svg')
//   dice.classList.add('h-1/2', 'w-1/2', 'animate-spin')
//   popUp.appendChild(dice)

//   setTimeout(() => {
//     rollDiceResults(move)
//   }, 2000)
// }
// >>>>>>> ce89b300f5c18314b5ea2601c1817805ebc7286c
