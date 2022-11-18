import { UserProfile } from './userAvatar.js';
const userName = new URLSearchParams(window.location.search).get('user');
const userAvatar = new URLSearchParams(window.location.search).get('avatar');
const board = document.getElementById('board');
const cardsPath = './assets/images/cards/';
const cardsArray = [];
const popUpContainer = document.getElementById('pop-up-container');
const popUp = document.getElementById('pop-up');
const rollDiceButton = document.getElementById('roll-dice');

rollDiceButton.addEventListener('click', rollDice);

const cardsLetters = ['A', 'B', 'C', 'D', 'E'];

function createCards(letter, cardsArray) {
  for (let i = 1; i <= 10; i++) {
    cardsArray.push(`${cardsPath}${letter}${i}.svg`);
  }
}

cardsLetters.forEach((letter) => {
  createCards(letter, cardsArray);
});

const avatar = document.createElement('img');
avatar.classList.add('absolute', 'top-2.5', 'right-2.5', 'h-12', 'w-12');

function addCardsToBoard(cardsArray) {
  board.innerHTML = '';
  let id = 1;
  cardsArray.forEach((card) => {
    const cardDiv = document.createElement('div');
    const cardImage = document.createElement('img');

    cardDiv.classList.add('card', 'h-28', 'w-28', 'rounded-lg', 'relative');
    cardDiv.setAttribute('id', id);
    cardImage.setAttribute('src', card);
    avatar.setAttribute('src', userAvatar);
    cardDiv.appendChild(cardImage);
    id++;

    board.appendChild(cardDiv);
  });
}

addCardsToBoard(cardsArray);

function showPopUp() {
  popUpContainer.classList.remove('hidden');
}

const user = new UserProfile(userName, avatar, 0);
// const moveButton = document.getElementById('moveAround')

function hidePopUp() {
  popUpContainer.classList.add('hidden');
  popUp.innerHTML = '';
}

function move(numberOfMoves) {
  hidePopUp();
  if (user.position + numberOfMoves > 50) {
    let moreThan50 = user.position + numberOfMoves;
    moreThan50 = moreThan50 - 50;
    user.position = user.position - moreThan50;
  }
  if (user.position == 50) {
    alert('You Win');
  } else {
    user.position = user.position + numberOfMoves;
  }
  document.getElementById(user.position).appendChild(avatar);
}
// let currentNumber = 0;

// const user = new UserProfile(userName, avatar, 0);

// const moveButton = document.getElementById('moveAround');
// moveButton.onclick = () => {
//   const number = Math.floor(1 + Math.random() * 6);
//   user.position = user.position + number;
//   document.getElementById(user.position).appendChild(avatar);
//
//   console.log(user);
// };

function rollDice() {
  showPopUp();
  const dice = document.createElement('img');
  dice.setAttribute('src', './assets/images/dice.svg');
  dice.classList.add('h-1/4', 'w-1/4', 'animate-spin');
  popUp.appendChild(dice);

  setTimeout(() => {
    popUp.innerHTML = '';
    const diceNumber = Math.floor(Math.random() * 6) + 1;
    results(popUp, diceNumber);
  }, 2000);
}

function results(parentElement, moves) {
  const results = document.createElement('h3');
  results.classList.add('text-3xl', 'font-bold');
  moves === 1
    ? (results.innerHTML = `You got ${moves} move`)
    : (results.innerHTML = `You got ${moves} moves`);

  const resultAvatar = avatar.cloneNode(true);
  resultAvatar.classList.remove(
    'absolute',
    'top-2.5',
    'right-2.5',
    'h-12',
    'w-12'
  );
  resultAvatar.classList.add('h-2/4', 'w-2/4');

  const moveButton = document.createElement('button');
  moveButton.setAttribute('id', 'moveAround');
  moveButton.classList.add(
    'bg-[url("/assets/images/btn-primary-bg.svg")]',
    'bg-cover',
    'rounded-xl',
    'py-2.5',
    'px-10',
    'mb-2',
    'text-xl',
    'font-semibold',
    'text-slate-200',
    'hover:scale-95',
    'transition-all',
    'duration-200'
  );
  moveButton.innerHTML = 'Move';

  resultAvatar.classList.add('animate-pulse');
  parentElement.appendChild(resultAvatar);
  parentElement.appendChild(results);
  parentElement.appendChild(moveButton);

  moveButton.onclick = () => {
    move(moves);
  };
}

// function addQuestionsToBoard(questions) {
//   board.innerHTML = '';
//   console.log(questions);

//   questions.forEach((question) => {
//     const questionDiv = document.createElement('div');
//     const questionNumber = document.createElement('h3');
//     questionDiv.classList.add(
//       'question',
//       'h-28',
//       'w-28',
//       'bg-slate-200',
//       'rounded-lg'
//     );
//     questionNumber.innerHTML = question.id;
//     questionDiv.appendChild(questionNumber);

//     board.appendChild(questionDiv);
//   });
// }

// fetch('data.json')
//   .then((response) => response.json())
//   .then((data) => {
//     addQuestionsToBoard(data);
//   });
