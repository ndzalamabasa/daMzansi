import { domElements } from './helper_objects.js';
const { popUpContainer, popUp } = domElements;

function showPopUp() {
  popUpContainer.classList.remove('hidden');
}

function hidePopUp() {
  popUpContainer.classList.add('hidden');
  popUp.innerHTML = '';
}

export { showPopUp, hidePopUp };
