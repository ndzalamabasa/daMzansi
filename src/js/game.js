import { avatar, cardsArray, user } from './game_controllers.js';
import { addCardsToBoard, rollDice } from './helper_functions.js';
import { domElements } from './helper_objects.js';
const { board, rollDiceButton } = domElements;

rollDiceButton.addEventListener('click', rollDice);

addCardsToBoard(cardsArray).forEach((card) => {
  board.appendChild(card);
});
