const userName = new URLSearchParams(window.location.search).get('user');
const userAvatar = new URLSearchParams(window.location.search).get('avatar');
const board = document.getElementById('board');
const cardsPath = './assets/images/cards/';
const cardsArray = [];

fetch('data.json')
  .then((response) => response.json())
  .then((data) => {
    addQuestionsToBoard(data);
  });

const cardsLetters = ['E', 'D', 'C', 'B', 'A'];

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
  cardsArray.forEach((card) => {
    const cardDiv = document.createElement('div');
    const cardImage = document.createElement('img');
    const avatar = document.createElement('img');
    cardDiv.classList.add('card', 'h-28', 'w-28', 'rounded-lg', 'relative');
    cardImage.setAttribute('src', card);
    avatar.setAttribute('src', userAvatar);
    avatar.classList.add('absolute', 'top-2.5', 'right-2.5', 'h-12', 'w-12');
    cardDiv.appendChild(cardImage);
    cardDiv.appendChild(avatar);

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
