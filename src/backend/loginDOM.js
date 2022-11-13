import userAvatar from './userAvatar'

const userName = document.getElementById('username').value
const password = document.getElementById('password').value
const email = document.getElementById('email').value
const passwordConfirmation = document.getElementById('passwordConfirmation')
  .value
const submit = document.getElementById('submit')

let player = ''
submit.onclick(() => {
  player = new userAvatar(userName, email, password, '')
  console.log(player)
})
