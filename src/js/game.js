const userName = new URLSearchParams(window.location.search).get('user')
const userAvatar = new URLSearchParams(window.location.search).get('avatar')
const board = document.getElementById('board')
const cardsPath = './assets/images/cards/'
const cardsArray = []
import { UserProfile } from './userAvatar.js'
// fetch('data.json')
//   .then((response) => response.json())
//   .then((data) => {
//     addQuestionsToBoard(data);
//   });
const avatar = document.createElement('img')
const cardsLetters = ['A', 'B', 'C', 'D', 'E']

function createCards(letter, cardsArray) {
  for (let i = 1; i <= 10; i++) {
    cardsArray.push(`${cardsPath}${letter}${i}.svg`)
  }
}

cardsLetters.forEach((letter) => {
  createCards(letter, cardsArray)
})

function addCardsToBoard(cardsArray) {
  board.innerHTML = ''
  let id = 1
  cardsArray.forEach((card) => {
    const cardDiv = document.createElement('div')
    const cardImage = document.createElement('img')

    cardDiv.classList.add('card', 'h-28', 'w-28', 'rounded-lg', 'relative')
    cardDiv.setAttribute('id', id)
    cardImage.setAttribute('src', card)
    avatar.setAttribute('src', userAvatar)
    // avatar.classList.add('absolute', 'top-2.5', 'right-2.5', 'h-12', 'w-12')
    cardDiv.appendChild(cardImage)
    // cardDiv.appendChild(avatar)
    id++

    board.appendChild(cardDiv)
  })
}

let currentNumber = 0
let diceNumber = document.getElementById('diceNumber').innerHTML
const user = new UserProfile(userName, avatar, 0)
const moveButton = document.getElementById('moveAround')
moveButton.onclick = () => {
  const number = Math.floor(1 + Math.random() * 6)
  user.position = user.position + number
  document.getElementById(user.position).appendChild(avatar)
  avatar.classList.add('absolute', 'top-2.5', 'right-2.5', 'h-12', 'w-12')
  console.log(user)
}

addCardsToBoard(cardsArray)

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
