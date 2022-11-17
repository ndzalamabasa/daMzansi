const userName = new URLSearchParams(window.location.search).get('user');
const userAvatar = new URLSearchParams(window.location.search).get('avatar');
const board = document.getElementById('board');

const userField = document.getElementById('userName');
const avatar = document.getElementById('avatar');
userField.innerHTML = userName;
avatar.setAttribute('src', userAvatar);
avatar.setAttribute('alt', userName);

// fetch data from questions.json asynchronusly
fetch('data.json')
  .then((response) => response.json())
  .then((data) => {
    addQuestionsToBoard(data);
  });

function addQuestionsToBoard(questions) {
  board.innerHTML = '';
  console.log(questions);

  questions.forEach((question) => {
    const questionDiv = document.createElement('div');
    const questionNumber = document.createElement('h3');
    questionDiv.classList.add(
      'question',
      'h-28',
      'w-28',
      'bg-slate-200',
      'rounded-lg'
    );
    questionNumber.innerHTML = question.id;
    questionDiv.appendChild(questionNumber);

    board.appendChild(questionDiv);
  });
}
