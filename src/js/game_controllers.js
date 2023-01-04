import { UserProfile } from "./userAvatar.js";
import { getQuestions, hidePopUp } from "./helper_functions.js";
import { addQuestionsToBoard } from "./questions.js";
import { domElements } from "./helper_objects.js";
import { avatarArray } from "./avatarArray.js";

const whosTurnIsIt = document.getElementById("whosTurnIsIt");
const users = new URLSearchParams(window.location.search).get("list"); // added
const { rollDiceButton } = domElements;
const moveButton = rollDiceButton.cloneNode(true);
const cardsPath = "./assets/images/cards/";

const cardsArray = [];
const cardsLetters = ["A", "B", "C", "D", "E"];

let avatar = document.createElement("img");
avatar.classList.add("absolute", "top-2.5", "right-2.5", "h-12", "w-12");
let user;

const usersObject = {};
const avatars = [];

users.split(",").forEach((profile, index) => {
  const profileNameAndAvatar = profile.split(":");
  usersObject[profileNameAndAvatar[0]] = new UserProfile(
    profileNameAndAvatar[0],
    profileNameAndAvatar[1],
    0,
    index,
    avatarArray[index]
  );
  usersObject[profileNameAndAvatar[0]].displayGameStats(domElements);
});

// console.log(usersObject.sort(a,b) => return a.userName < b.userName);
// console.log(usersObject);

// const sortable = Object.fromEntries(
// Object.entries(usersObject).sort((a, b) => a - b)
// );
// console.log(sortable);
// let sortable = [];
// for (let player of usersObject[player]) {
//   sortable.push([player, usersObject[player]]);
// }
// sortable.sort(function (a, b) {
//   return a[2] - b[2];
// });

// console.log(sortable);

let i = 0;
let userKeys = Object.keys(usersObject);

function switchTurns() {
  const userToTurn = usersObject[userKeys[i]];
  user = userToTurn;
  i++;
  if (i === userKeys.length) i = 0;
  avatar = user.avatarSettings;
  user.setUserAvatar();
  user.indicateUserTurn();
  //
  //
  //

  const arrObject = usersObject;
  console.log(arrObject);

  //
  //
  //
}
switchTurns();

moveButton.innerText = "Move";

cardsLetters.forEach((letter) => {
  for (let i = 1; i <= 10; i++) {
    cardsArray.push(`${cardsPath}${letter}${i}.svg`);
  }
});

function move(numberOfMoves) {
  hidePopUp();

  if (user.position + numberOfMoves > 50) {
    let moreThan50 = user.position + numberOfMoves;
    moreThan50 = moreThan50 - 50;
    user.position = user.position - moreThan50;
  }
  user.position == 50
    ? alert("You Win")
    : (user.position = user.position + numberOfMoves);

  user.positionUser(avatars[user.playerTurn]);
  // console.log(user);
  const userNameFormat =
    user.userName[0].toUpperCase() + user.userName.slice(1);
  document.getElementById(
    user.userName
  ).innerHTML = `${userNameFormat}'s Position: ${user.position}`;
  setTimeout(() => {
    getQuestions().then((questions) => {
      addQuestionsToBoard(questions);
    });
  }, 1500);
}

export {
  moveButton,
  cardsArray,
  move,
  switchTurns,
  user,
  avatars,
  usersObject,
  avatar,
};
