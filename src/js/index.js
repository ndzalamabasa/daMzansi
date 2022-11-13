const modal = document.querySelector('.modal');
const infoContainer = document.getElementById('info');
// const next = document.getElementById('next');
const gameInfo = [
  'Da Mzansi is a board game that teaches you about South Africa.',
  'The game takes the form of snakes and ladders, where you click a button to get the number of moves you can take (generated randomly between 1 and 6).',
];

// gameInfoCopy = gameInfo.slice();

// infoContainer.innerHTML = gameInfo.shift();
// next.addEventListener('click', () => {
//   if (gameInfo.length > 0) {
//     infoContainer.innerHTML = gameInfo.shift();
//   } else {
//     next.style.display = 'none';
//   }
// });

modal.classList.add(
  'flex',
  'flex-col',
  'items-center',
  'justify-center',
  'text-center',
  'bg-sky-600',
  'w-11/12',
  'max-w-xl',
  'm-auto',
  'rounded-3xl',
  'p-4'
);
