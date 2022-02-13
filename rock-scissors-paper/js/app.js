const rockScissorsPaper = ['✊', '✌️', '🖐'];
const $computer = document.querySelector('.computer');
const $buttonGroup = document.querySelector('.button-group');
let currentComputer = null;
let canPlay = true;

const timerId = setInterval(() => {
  currentComputer = Math.floor(Math.random() * 3);
  $computer.textContent = rockScissorsPaper[currentComputer];
}, 50);

const computeResult = userSelected => {
  if (currentComputer === userSelected) return 'Draw';
  if (userSelected === 0 && currentComputer === 1) return 'Win';
  if (userSelected === 0 && currentComputer === 2) return 'Lose';
  if (userSelected === 1 && currentComputer === 0) return 'Lose';
  if (userSelected === 1 && currentComputer === 2) return 'Win';
  if (userSelected === 2 && currentComputer === 0) return 'Win';
  if (userSelected === 2 && currentComputer === 1) return 'Lose';
};

$buttonGroup.onclick = ({ target }) => {
  if (!canPlay) return;
  canPlay = false;
  clearInterval(timerId);
  const userSelected = target.matches('.rock') ? 0 : target.matches('.scissors') ? 1 : 2;
  alert(computeResult(userSelected));
};
