import userAvatar from './userAvatar.js'

const avatars = ['ANC-Logo', 'da', 'ifp', 'Eff']
const renderAvatarChoices = () => {
  let avatarList = document.getElementById('avatarList')
  avatars.forEach((logo) => {
    avatarList.innerHTML =
      avatarList.innerHTML +
      `<li class="avatarList">
        <button>
            <img src='../src/backend/avatars/${logo}.png' alt="logo" id="logoImage"/>
        </button>
    </li>`
  })

  avatarList.children.forEach((child, index) => {})
}

renderAvatarChoices()
