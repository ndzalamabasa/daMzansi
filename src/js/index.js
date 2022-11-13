const avatars = document.querySelectorAll('.avatar');
const avatarPath = './assets/images/avatars/';

avatars.forEach((avatar) => {
  avatar.addEventListener('click', (e) => {
    const target = e.target;
    const src = target.getAttribute('src');
    const lastSlash = src.lastIndexOf('/');
    const lastPeriod = src.lastIndexOf('.');
    const avatarName = src.slice(lastSlash + 1, lastPeriod);
    const avatarExt = src.slice(lastPeriod + 1);
    console.log(src);
    console.log(!src.includes('selected'));

    if (!src.includes('selected')) {
      const avatarSrc = `${avatarPath}${avatarName}-selected.${avatarExt}`;
      target.setAttribute('src', avatarSrc);
      console.log(avatarSrc);
    }
  });
});
