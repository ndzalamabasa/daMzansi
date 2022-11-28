import { domElements } from './helper_objects.js';
const { rollDiceButton } = domElements;
const moveButton = rollDiceButton.cloneNode(true);
const cardsPath = './assets/images/cards/';
const cardsArray = [];
const cardsLetters = ['A', 'B', 'C', 'D', 'E'];
const avatar = document.createElement('img');

moveButton.innerText = 'Move';

cardsLetters.forEach((letter) => {
  for (let i = 1; i <= 10; i++) {
    cardsArray.push(`${cardsPath}${letter}${i}.svg`);
  }
});

avatar.classList.add('absolute', 'top-2.5', 'right-2.5', 'h-12', 'w-12');

export { moveButton, cardsArray, avatar };
