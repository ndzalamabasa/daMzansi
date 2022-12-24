export class UserProfile {
  constructor(
    userName,
    userAvatar,
    position = 0,
    playerTurn = 0,
    avatarSettings
  ) {
    this.userName = userName;
    this.userAvatar = userAvatar;
    this.position = position;
    this.playerTurn = playerTurn;
    this.avatarSettings = avatarSettings;
  }
  userStatsDiv() {
    const userStats = document.createElement("div");
    userStats.id = this.userName;
    userStats.classList.add("text-white");
    // document.getElementById("userStats") = this.position
    return userStats;
  }
  move(steps) {
    let current = this.position + steps;
    return current;
  }
  positionUser() {
    this.setUserAvatar(this.avatarSettings);
    document.getElementById(this.position).appendChild(this.avatarSettings);
  }
  setUserAvatar() {
    return this.avatarSettings.setAttribute("src", this.userAvatar);
  }
  indicateUserTurn() {
    const userNameFormat =
      this.userName[0].toUpperCase() + this.userName.slice(1);
    const avatarToRoll = document.createElement("img");
    avatarToRoll.classList.add("absolute", "right-10", "h-20", "w-20");
    avatarToRoll.setAttribute("src", this.userAvatar);
    const avatarTurn = document.getElementById("whosTurnIsIt");
    avatarTurn.innerHTML = userNameFormat + "'s Turn";
    avatarTurn.children > 0
      ? avatarTurn.children.remove()
      : avatarTurn.appendChild(avatarToRoll);
  }
  displayGameStats(domElements) {
    const gameStatsAvtar = document.createElement("img");
    gameStatsAvtar.classList.add("h-10", "w-10");
    gameStatsAvtar.setAttribute("src", this.userAvatar);
    domElements.gameStats.appendChild(gameStatsAvtar);
    domElements.gameStats.appendChild(this.userStatsDiv());
  }
}
