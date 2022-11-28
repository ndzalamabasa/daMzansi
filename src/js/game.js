import { cardsArray, avatar, move } from './game_controllers.js';
import {
  showPopUp,
  addCardsToBoard,
  rollDiceResults,
  rollDice,
} from './helper_functions.js';
import { domElements } from './helper_objects.js';
const { board, popUp, rollDiceButton } = domElements;
const userAvatar = new URLSearchParams(window.location.search).get('avatar');
avatar.setAttribute('src', userAvatar);
// const users = new URLSearchParams(window.location.search).get('list');

rollDiceButton.addEventListener('click', rollDice);

// console.log(users.split(','));
// userAvatar = users.split(',')[1].split(':')[1];

addCardsToBoard(cardsArray).forEach((card) => {
  board.appendChild(card);
});
