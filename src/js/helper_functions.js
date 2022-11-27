import { domElements } from './helper_objects.js';
const { popUpContainer, popUp } = domElements;

async function getQuestions() {
  const response = await fetch('data.json');
  const data = await response.json();
  return data;
}

function showPopUp() {
  popUpContainer.classList.remove('hidden');
}

function hidePopUp() {
  popUpContainer.classList.add('hidden');
  popUp.innerHTML = '';
}

function addCardsToBoard(cardsArray) {
  const cards = [];
  let id = 1;

  cardsArray.forEach((card) => {
    const cardDiv = document.createElement('div');
    const cardImage = document.createElement('img');

    cardDiv.classList.add('card', 'h-28', 'w-28', 'rounded-lg', 'relative');
    cardDiv.setAttribute('id', id);
    cardImage.setAttribute('src', card);
    cardDiv.appendChild(cardImage);
    id++;

    cards.push(cardDiv);
  });

  return cards;
}

export { getQuestions, showPopUp, hidePopUp, addCardsToBoard };
