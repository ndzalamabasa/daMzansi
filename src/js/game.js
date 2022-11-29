import { avatarArray } from './avatarArray.js'
import { cardsArray, move, user } from './game_controllers.js'
import {
  showPopUp,
  addCardsToBoard,
  rollDiceResults,
} from './helper_functions.js'
import { domElements } from './helper_objects.js'
const { board, popUp, rollDiceButton } = domElements
let userAvatar = new URLSearchParams(window.location.search).get('avatar')

rollDiceButton.addEventListener('click', rollDice)

addCardsToBoard(cardsArray).forEach((card) => {
  board.appendChild(card)
})

function rollDice() {
  showPopUp()
  const dice = document.createElement('img')
  dice.setAttribute('src', './assets/images/dice.svg')
  dice.classList.add('h-1/2', 'w-1/2', 'animate-spin')
  popUp.appendChild(dice)
  user.setUserAvatar(avatarArray[user.playerTurn])
  setTimeout(() => {
    rollDiceResults(move)
  }, 2000)
}
