import { avatar, cardsArray } from './game_controllers.js';
import { addCardsToBoard, rollDice } from './helper_functions.js';
import { domElements } from './helper_objects.js';
const { board, rollDiceButton } = domElements;
let userAvatar = new URLSearchParams(window.location.search).get('avatar');
avatar.setAttribute('src', userAvatar);

rollDiceButton.addEventListener('click', rollDice);

addCardsToBoard(cardsArray).forEach((card) => {
  board.appendChild(card);
});
