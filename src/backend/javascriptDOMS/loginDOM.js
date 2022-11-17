import userAvatar from '../userAvatar'

const userName = document.getElementById('username').value
const password = document.getElementById('password').value
const email = document.getElementById('email').value
const passwordConfirmation = document.getElementById('passwordConfirmation')
  .value
const submit = document.getElementById('submit')
const userForm = document.getElementById('userForm')
let player = ''

userForm.onsubmit(() => {
  userProfile()
})
function userProfile() {
  player = new userAvatar(userName, email, password, '')
  console.log(player)
}
