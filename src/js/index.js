import { UserProfile } from './userAvatar.js';

const avatars = document.querySelectorAll('.avatar');
const avatarPath = './assets/images/avatars/';
let user;
console.log('hello');
avatars.forEach((avatar) => {
  avatar.addEventListener('click', (e) => {
    const target = e.target;
    const src = target.getAttribute('src');
    const lastSlash = src.lastIndexOf('/');
    const lastPeriod = src.lastIndexOf('.');
    let avatarName = src.slice(lastSlash + 1, lastPeriod);
    const avatarExt = src.slice(lastPeriod + 1);

    if (!src.includes('selected')) {
      const selectedAvatar = `${avatarPath}${avatarName}-selected.${avatarExt}`;
      target.setAttribute('src', selectedAvatar);
      user = new UserProfile(
        avatarName,
        `${avatarPath}${avatarName}.${avatarExt}`
      );
    } else {
      avatarName = avatarName.replace('-selected', '');
      const defaultAvatar = `${avatarPath}${avatarName}.${avatarExt}`;
      target.setAttribute('src', defaultAvatar);
    }
  });
});

const playButton = document.getElementById('playButton');

playButton.addEventListener('click', () => {
  if (user) {
    window.location.href = `./game.html?user=${user.userName}&avatar=${user.userAvatar}`;
  } else {
    alert('Please select an avatar to continue');
  }
});
