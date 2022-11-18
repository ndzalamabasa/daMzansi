const userName = new URLSearchParams(window.location.search).get('user');
const userAvatar = new URLSearchParams(window.location.search).get('avatar');
const board = document.getElementById('board');
const cardsPath = './assets/images/cards/';
const cardsArray = [];
const popUpContainer = document.getElementById('pop-up-container');
const popUp = document.getElementById('pop-up');
const rollDiceButton = document.getElementById('roll-dice');

// fetch('data.json')
//   .then((response) => response.json())
//   .then((data) => {
//     addQuestionsToBoard(data);
//   });

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

function addCardsToBoard(cardsArray) {
  board.innerHTML = '';
  let id = 1;
  cardsArray.forEach((card) => {
    const cardDiv = document.createElement('div');
    const cardImage = document.createElement('img');
    const avatar = document.createElement('img');
    cardDiv.classList.add('card', 'h-28', 'w-28', 'rounded-lg', 'relative');
    cardDiv.setAttribute('id', id);
    cardImage.setAttribute('src', card);
    avatar.setAttribute('src', userAvatar);
    avatar.classList.add('absolute', 'top-2.5', 'right-2.5', 'h-12', 'w-12');
    cardDiv.appendChild(cardImage);
    cardDiv.appendChild(avatar);
    id++;

    board.appendChild(cardDiv);
  });
}

addCardsToBoard(cardsArray);

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

function showPopUp() {
  popUpContainer.classList.remove('hidden');
}

function hidePopUp() {
  popUpContainer.classList.add('hidden');
}

function rollDice() {
  showPopUp();
  const dice = document.createElement('img');
  dice.setAttribute('src', './assets/images/dice.svg');
  dice.classList.add('h-1/4', 'w-1/4', 'animate-spin');
  popUp.appendChild(dice);

  setTimeout(() => {
    popUp.innerHTML = '';
    const diceNumber = Math.floor(Math.random() * 6) + 1;
    const diceNumberDiv = document.createElement('div');
    diceNumberDiv.classList.add('text-6xl', 'font-bold');
    diceNumberDiv.innerHTML = diceNumber;
    popUp.appendChild(diceNumberDiv);
  }, 2000);
}
