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
    this.avatarSettings.setAttribute('src', this.userAvatar)
  }
}
