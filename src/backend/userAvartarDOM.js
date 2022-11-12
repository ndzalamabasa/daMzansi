import userAvatar from './userAvatar.js'

const avatars = [
  '../src/backend/avatars/ANC-Logo.png',
  '../src/backend/avatars/da.png',
  '../src/backend/avatars/ifp.png',
  '../src/backend/avatars/Eff.png',
]

const renderAvatarChoices = () => {
  let avatarList = document.getElementById('avatarList')
  avatarList.innerHTML = `<li>
            <button><img src='../src/backend/avatars/ANC-Logo.png' alt="logo" id="logoImage"/></button>
            </li>`
  avatarList.innerHTML =
    avatarList.innerHTML +
    `<li>
            <button><img src='../src/backend/avatars/da.png' alt="logo" id="logoImage"/></button>
            </li>`
  avatarList.innerHTML =
    avatarList.innerHTML +
    `<li>
            <button><img src='../src/backend/avatars/ifp.png' alt="logo" id="logoImage"/></button>
            </li>`
  avatarList.innerHTML =
    avatarList.innerHTML +
    `<li>
            <button><img src='../src/backend/avatars/Eff.png' alt="logo" id="logoImage"/></button>
            </li>`
}

renderAvatarChoices()
