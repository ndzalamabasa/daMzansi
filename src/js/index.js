const modal = document.querySelector('.modal');
const infoContainer = document.getElementById('info');
const gameInfo = [
  'A board game that teaches you about South Africa.',
  'The game takes the form of snakes and ladders, where you click a button to get the number of moves you can take (generated randomly between 1 and 6).',
];

infoContainer.innerHTML = gameInfo[0];
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
