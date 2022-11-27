import { UserProfile } from './userAvatar.js';
const userName = new URLSearchParams(window.location.search).get('user');
const userAvatar = new URLSearchParams(window.location.search).get('avatar');
// const users = new URLSearchParams(window.location.search).get('list');
const board = document.getElementById('board');
const cardsPath = './assets/images/cards/';
const cardsArray = [];
import { domElements } from './helper_objects';
const { popUp, rollDiceButton } = domElements;

const moveButton = document.createElement('button');
moveButton.setAttribute('id', 'moveAround');
moveButton.classList.add(
  'bg-[url("/assets/images/btn-primary-bg.svg")]',
  'bg-cover',
  'rounded-xl',
  'py-2.5',
  'px-10',
  'mt-4',
  'text-xl',
  'font-semibold',
  'text-slate-200',
  'hover:scale-95',
  'transition-all',
  'duration-200'
);
moveButton.innerHTML = 'Move';

rollDiceButton.addEventListener('click', rollDice);

const cardsLetters = ['A', 'B', 'C', 'D', 'E'];
// console.log(users.split(','));
// userAvatar = users.split(',')[1].split(':')[1];

function addQuestionsToBoard(data) {
  const questionIndex = Math.floor(Math.random() * data.length - 1);
  const question = data[questionIndex];
  if (question) {
    getQuestion(question);
  }
}

function getQuestion(question) {
  popUp.innerHTML = '';
  const questionDiv = document.createElement('div');
  const questionTitle = document.createElement('h3');
  questionTitle.classList.add('text-center');
  const optionsList = document.createElement('ul');
  optionsList.classList.add('flex', 'flex-col', 'gap-2', 'mt-4', 'self-start');

  const questionButton = document.createElement('button');

  questionDiv.classList.add('flex', 'flex-col', 'items-center');
  questionTitle.classList.add('text-xl', 'font-bold', 'mb-2');
  questionButton.classList.add(
    'bg-[url("/assets/images/btn-primary-bg.svg")]',
    'bg-cover',
    'rounded-xl',
    'py-2.5',
    'px-10',
    'mt-8',
    'text-xl',
    'font-semibold',
    'text-slate-200',
    'hover:scale-95',
    'transition-all',
    'duration-200'
  );

  questionTitle.innerHTML = question.question;
  questionDiv.appendChild(questionTitle);

  question.options.forEach((option) => {
    const questionOption = document.createElement('li');
    const optionSelect = document.createElement('input');
    optionSelect.classList.add('mr-2');
    const label = document.createElement('label');

    questionOption.classList.add('flex', 'items-center');
    optionSelect.setAttribute('type', 'radio');
    optionSelect.setAttribute('name', 'question');
    label.innerHTML = option;

    questionOption.appendChild(optionSelect);
    questionOption.appendChild(label);
    optionsList.appendChild(questionOption);
  });

  questionDiv.appendChild(optionsList);

  questionButton.innerHTML = 'Submit';
  questionDiv.appendChild(questionButton);
  popUp.appendChild(questionDiv);
  showPopUp();

  questionButton.onclick = () => {
    if (document.querySelector('input[name="question"]:checked')) {
      const selectedOption = document.querySelector(
        'input[name="question"]:checked'
      ).nextSibling.innerHTML;
      if (selectedOption === question.answer) {
        questionDiv.removeChild(optionsList);
        questionDiv.removeChild(questionButton);

        questionTitle.innerHTML = "Congrats! You're moving up!";
        const winImage = document.createElement('img');
        const bonusMoves = questionTitle.cloneNode(true);
        winImage.setAttribute('src', '/assets/images/win.svg');
        winImage.classList.add('w-1/2');
        questionDiv.appendChild(winImage);
        const moves = getRandomNumber();
        bonusMoves.innerHTML = `You got ${moves} moves!`;
        questionDiv.appendChild(bonusMoves);
        questionDiv.appendChild(moveButton);
        moveButton.onclick = () => {
          move(moves);
        };
      } else {
        alert('Wrong!');
        hidePopUp();
      }
    } else {
      alert('Please select an option');
    }
  };
}

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

const user = new UserProfile(userName, avatar, 0);

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
    fetch('data.json')
      .then((response) => response.json())
      .then((data) => {
        addQuestionsToBoard(data);
      });
  }, 1500);
}

function rollDice() {
  showPopUp();
  const dice = document.createElement('img');
  dice.setAttribute('src', './assets/images/dice.svg');
  dice.classList.add('h-1/4', 'w-1/4', 'animate-spin');
  popUp.appendChild(dice);

  setTimeout(() => {
    popUp.innerHTML = '';
    const diceNumber = getRandomNumber();
    results(popUp, diceNumber);
  }, 2000);
}

function getRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
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

  parentElement.appendChild(resultAvatar);
  parentElement.appendChild(results);
  parentElement.appendChild(moveButton);

  moveButton.onclick = () => {
    move(moves);
  };
}
