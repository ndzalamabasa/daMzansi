import { avatarArray } from './avatarArray.js'
import { avatar, cardsArray, move, user } from './game_controllers.js'
import {
  showPopUp,
  addCardsToBoard,
  rollDiceResults,
  showWhosTurn,
} from './helper_functions.js'
import { domElements } from './helper_objects.js'
const { board, popUp, rollDiceButton } = domElements

showWhosTurn()

rollDiceButton.addEventListener('click', rollDice)

addCardsToBoard(cardsArray).forEach((card) => {
  board.appendChild(card)
})

function rollDice() {
  avatar.setAttribute('src', user.userAvatar)

  showPopUp()
  const dice = document.createElement('img')
  dice.setAttribute('src', './assets/images/dice.svg')
  dice.classList.add('h-1/2', 'w-1/2', 'animate-spin')
  popUp.appendChild(dice)

  setTimeout(() => {
    rollDiceResults(move)
  }, 2000)
}
