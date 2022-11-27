const moveButton = document.createElement('button');
moveButton.setAttribute('id', 'moveAround');
moveButton.classList.add(
  'bg-[url("/assets/images/btn-primary-bg.svg")]',
  'bg-cover',
  'rounded-xl',
  'py-2.5',
  'px-10',
  'mt-4',
  'text-xl',
  'font-semibold',
  'text-slate-200',
  'hover:scale-95',
  'transition-all',
  'duration-200'
);
moveButton.innerText = 'Move';

const cardsPath = './assets/images/cards/';
const cardsArray = [];
const cardsLetters = ['A', 'B', 'C', 'D', 'E'];

cardsLetters.forEach((letter) => {
  for (let i = 1; i <= 10; i++) {
    cardsArray.push(`${cardsPath}${letter}${i}.svg`);
  }
});

export { moveButton, cardsArray };
