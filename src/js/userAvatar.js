export class UserProfile {
  constructor(
    userName,
    userAvatar,
    position = 0,
    playerTurn = 0,
    avatarSettings,
  ) {
    this.userName = userName
    this.userAvatar = userAvatar
    this.position = position
    this.playerTurn = playerTurn
    this.avatarSettings = avatarSettings
  }
  move(steps) {
    let current = this.position + steps
    return current
  }
  positionUser() {
    this.setUserAvatar(this.avatarSettings)
    document.getElementById(this.position).appendChild(this.avatarSettings)
  }
  setUserAvatar() {
    return this.avatarSettings.setAttribute('src', this.userAvatar)
  }
  indicateUserTurn() {
  const avatarToRoll = document.createElement('img')
  avatarToRoll.classList.add('absolute', 'top-15', 'left-20', 'h-20', 'w-20')
  avatarToRoll.setAttribute('src',this.userAvatar)
    const avatarTurn = document.getElementById("whosTurnIsIt")
    avatarTurn.innerHTML = this.userName + "'s Turn"
    avatarTurn.children > 0 ? avatarTurn.children.remove() : avatarTurn.appendChild(avatarToRoll)
   }
}
