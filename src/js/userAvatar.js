export class UserProfile {
  constructor(userName, userAvatar, position = 0) {
    this.userName = userName
    this.userAvatar = userAvatar
    this.position = position
  }
  move(steps) {
    let current = this.position + steps
    return current
  }
}
