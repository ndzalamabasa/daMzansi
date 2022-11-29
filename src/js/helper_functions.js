import { domElements } from './helper_objects.js'
import { avatar, moveButton } from './game_controllers.js'

const { popUpContainer, popUp } = domElements

async function getQuestions() {
  const response = await fetch('data.json')
  const data = await response.json()
  return data
}

function showPopUp() {
  popUpContainer.classList.remove('hidden')
}

function hidePopUp() {
  popUpContainer.classList.add('hidden')
  resetPopUP()
}

function resetPopUP() {
  popUp.innerHTML = ''
}

function addCardsToBoard(cardsArray) {
  const cards = []
  let id = 1

  cardsArray.forEach((card) => {
    const cardDiv = document.createElement('div')
    const cardImage = document.createElement('img')

    cardDiv.classList.add('card', 'h-28', 'w-28', 'rounded-lg', 'relative')
    cardDiv.setAttribute('id', id)
    cardImage.setAttribute('src', card)
    cardDiv.appendChild(cardImage)
    id++

    cards.push(cardDiv)
  })

  return cards
}

function getRandomNumber() {
  return Math.floor(Math.random() * 6) + 1
}

function rollDiceResults(moveFunction) {
  resetPopUP()
  const moves = getRandomNumber()
  const results = document.createElement('h3')
  results.classList.add('text-3xl', 'font-bold')
  moves === 1
    ? (results.innerHTML = `You got ${moves} move`)
    : (results.innerHTML = `You got ${moves} moves`)

  const resultAvatar = avatar.cloneNode(true)
  resultAvatar.classList.remove(
    'absolute',
    'top-2.5',
    'right-2.5',
    'h-12',
    'w-12',
  )
  resultAvatar.classList.add('h-2/4', 'w-2/4')

  popUp.appendChild(resultAvatar)
  popUp.appendChild(results)
  popUp.appendChild(moveButton)

  moveButton.onclick = () => {
    moveFunction(moves)
  }
}

export {
  getQuestions,
  showPopUp,
  hidePopUp,
  addCardsToBoard,
  resetPopUP,
  getRandomNumber,
  rollDiceResults,
}
