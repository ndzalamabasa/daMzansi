class userAvatar {
  constructor(userName, userEmail, userPassword, userAvatar) {
    this.userName = userName
    this.userEmail = userEmail
    this.userPassword = userPassword
    this.userAvatar = ''
  }

  chooseAvatar = function (userAvatar) {
    this.userAvatar = userAvatar
    return 'welcome to south africa'
  }
}

module.exports = userAvatar
