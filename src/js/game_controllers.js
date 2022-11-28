import { UserProfile } from './userAvatar.js';
import { getQuestions, hidePopUp } from './helper_functions.js';
import { addQuestionsToBoard } from './questions.js';
import { domElements } from './helper_objects.js';
const userName = new URLSearchParams(window.location.search).get('user');
const { rollDiceButton } = domElements;
const moveButton = rollDiceButton.cloneNode(true);
const cardsPath = './assets/images/cards/';

const cardsArray = [];
const cardsLetters = ['A', 'B', 'C', 'D', 'E'];
const avatar = document.createElement('img');
avatar.classList.add('absolute', 'top-2.5', 'right-2.5', 'h-12', 'w-12');

const user = new UserProfile(userName, avatar, 0);

moveButton.innerText = 'Move';

cardsLetters.forEach((letter) => {
  for (let i = 1; i <= 10; i++) {
    cardsArray.push(`${cardsPath}${letter}${i}.svg`);
  }
});

function move(numberOfMoves) {
  hidePopUp();
  if (user.position + numberOfMoves > 50) {
    let moreThan50 = user.position + numberOfMoves;
    moreThan50 = moreThan50 - 50;
    user.position = user.position - moreThan50;
  }
  user.position == 50
    ? alert('You Win')
    : (user.position = user.position + numberOfMoves);

  document.getElementById(user.position).appendChild(avatar);

  setTimeout(() => {
    getQuestions().then((questions) => {
      addQuestionsToBoard(questions);
    });
  }, 1500);
}

export { moveButton, cardsArray, avatar, move };
