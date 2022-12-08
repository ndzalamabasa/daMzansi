import { move, switchTurns } from './game_controllers.js';
import { moveButton } from './game_controllers.js';
import {
  showPopUp,
  resetPopUP,
  getRandomNumber,
  hidePopUp,
  
} from './helper_functions.js';
import { domElements } from './helper_objects.js';
const { popUp } = domElements;

function addQuestionsToBoard(data) {
  const questionIndex = Math.floor(Math.random() * data.length - 1);
  const question = data[questionIndex];
  if (question) {
    getQuestion(question);
  }
}

function getQuestion(question) {
  resetPopUP();
  const questionDiv = document.createElement('div');
  const questionTitle = document.createElement('h3');
  questionTitle.classList.add('text-center');
  const optionsList = document.createElement('ul');
  optionsList.classList.add('flex', 'flex-col', 'gap-2', 'my-4', 'self-start');

  const submitAnswer = moveButton.cloneNode(true);
  submitAnswer.innerHTML = 'Submit Answer';

  questionDiv.classList.add(
    'flex',
    'flex-col',
    'items-center',
    'justify-between'
  );
  questionTitle.classList.add('text-xl', 'font-bold', 'pb-4');

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

  questionDiv.appendChild(submitAnswer);
  popUp.appendChild(questionDiv);
  showPopUp();

  submitAnswer.onclick = (e) => {
    const isAnswerCorrect = checkAnswer(question);

    if (isAnswerCorrect) {
      showCongratsMessage(questionDiv, optionsList, e.target, questionTitle);
    } else {
      showCorrectAnswer(
        questionDiv,
        optionsList,
        e.target,
        questionTitle,
        question
      );
      switchTurns();
    }
  };
}

function checkAnswer(question) {
  if (document.querySelector('input[name="question"]:checked')) {
    const selectedOption = document.querySelector(
      'input[name="question"]:checked'
    ).nextSibling.innerHTML;

    return selectedOption === question.answer;
  } else {
    alert('Please select an option');
  }
}

function showCorrectAnswer(
  questionContainer,
  options,
  submitAnswer,
  popUpTitle,
  question
) {
  questionContainer.removeChild(options);
  questionContainer.removeChild(submitAnswer);

  popUpTitle.innerHTML = 'You got it wrong!';
  const message = document.createElement('h5');
  message.innerHTML = `The correct answer is <strong>${question.answer}</strong>`;
  questionContainer.appendChild(message);
  const rollDiceAgain = moveButton.cloneNode(true);
  questionContainer.appendChild(rollDiceAgain);
  rollDiceAgain.onclick = () => {
    hidePopUp()
  };
}

function showCongratsMessage(
  questionContainer,
  options,
  submitAnswer,
  popUpTitle
) {
  questionContainer.removeChild(options);
  questionContainer.removeChild(submitAnswer);

  popUpTitle.innerHTML = "Congrats! You're moving up!";
  // const winImage = document.createElement('img');
  const bonusMoves = popUpTitle.cloneNode(true);
  // winImage.setAttribute('src', '/assets/images/win.svg');
  // winImage.classList.add('w-1/2');
  // questionContainer.appendChild(winImage);
  const moves = getRandomNumber();
  bonusMoves.innerHTML = `You got ${moves} moves!`;
  questionContainer.appendChild(bonusMoves);
  questionContainer.appendChild(moveButton);
  moveButton.onclick = () => {
    move(moves);
  };
}

export { addQuestionsToBoard };
