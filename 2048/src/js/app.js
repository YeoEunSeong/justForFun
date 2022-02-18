import { getRandomNumber } from '../utils/getRandomNumber.js';

const $board = document.querySelector('.board');
const $buttonGroup = document.querySelector('.button-group');

const game2048 = (() => {
  let board = [];
  const baseNumber = [2, 4, 8];
  let gameOver = false;

  // const numberToEng = {
  //   0: 'zero',
  //   2: 'two',
  //   4: 'four',
  //   8: 'eight',
  //   16: 'onesix',
  //   32: 'threetwo',
  //   64: 'sixfour',
  //   128: 'onetwoeight',
  //   256: 'twofivesix',
  //   512: ' fiveonetwo',
  //   1024: 'onezerotwofour',
  //   2048: 'twozerofoureight',
  // };

  const isGameOver = () => board.flat().filter(num => num === 0).length === 0;

  const displayGameOver = () => {
    alert('Game Over!');
  };

  const render = () => {
    $board.innerHTML = board
      .flat()
      .map(
        num => `
          <li class="cell">${num === 0 ? '' : num}</li>
        `
      )
      .join('');
  };

  const generateNumber = () => {
    gameOver = isGameOver();
    if (gameOver) {
      displayGameOver();
      return;
    }
    let row = getRandomNumber(4);
    let col = getRandomNumber(4);

    while (board[row][col] !== 0) {
      row = getRandomNumber(4);
      col = getRandomNumber(4);
    }

    board[row][col] = baseNumber[getRandomNumber(3)];
    render();
  };

  const moveUp = () => {
    if (gameOver) return;
    for (let col = 0; col < 4; col++) {
      for (let row = 1; row < 4; row++) {
        if (board[row][col] === 0) continue;
        let nRow = row;

        while (true) {
          nRow -= 1;
          if (nRow === -1 || (board[nRow][col] !== 0 && board[nRow][col] !== board[nRow + 1][col])) break;
          if (board[nRow][col] === board[nRow + 1][col]) {
            board[nRow][col] = board[nRow][col] * 2;
            board[nRow + 1][col] = 0;
            break;
          }
          board[nRow][col] = board[nRow + 1][col];
          board[nRow + 1][col] = 0;
        }
      }
    }
    generateNumber();
  };

  const moveDown = () => {
    if (gameOver) return;
    for (let col = 0; col < 4; col++) {
      for (let row = 3; row >= 0; row--) {
        if (board[row][col] === 0) continue;
        let nRow = row;

        while (true) {
          nRow += 1;
          if (nRow === 4 || (board[nRow][col] !== 0 && board[nRow][col] !== board[nRow - 1][col])) break;
          if (board[nRow][col] === board[nRow - 1][col]) {
            board[nRow][col] = board[nRow][col] * 2;
            board[nRow - 1][col] = 0;
            break;
          }
          board[nRow][col] = board[nRow - 1][col];
          board[nRow - 1][col] = 0;
        }
      }
    }
    generateNumber();
  };

  const moveLeft = () => {
    if (gameOver) return;
    for (let row = 0; row < 4; row++) {
      for (let col = 1; col < 4; col++) {
        if (board[row][col] === 0) continue;
        let nCol = col;

        while (true) {
          nCol -= 1;
          if (nCol === -1 || (board[row][nCol] !== 0 && board[row][nCol] !== board[row][nCol + 1])) break;
          if (board[row][nCol] === board[row][nCol + 1]) {
            board[row][nCol] = board[row][nCol] * 2;
            board[row][nCol + 1] = 0;
            break;
          }
          board[row][nCol] = board[row][nCol + 1];
          board[row][nCol + 1] = 0;
        }
      }
    }
    generateNumber();
  };

  const moveRight = () => {
    if (gameOver) return;
    for (let row = 0; row < 4; row++) {
      for (let col = 3; col >= 0; col--) {
        if (board[row][col] === 0) continue;
        let nCol = col;

        while (true) {
          nCol += 1;
          if (nCol === 4 || (board[row][nCol] !== 0 && board[row][nCol] !== board[row][nCol - 1])) break;
          if (board[row][nCol] === board[row][nCol - 1]) {
            board[row][nCol] = board[row][nCol] * 2;
            board[row][nCol - 1] = 0;
            break;
          }
          board[row][nCol] = board[row][nCol - 1];
          board[row][nCol - 1] = 0;
        }
      }
    }
    generateNumber();
  };

  const selectDirection = direction => {
    // Refatoring needed
    switch (direction) {
      case 'up':
        moveUp();
        break;
      case 'down':
        moveDown();
        break;
      case 'left':
        moveLeft();
        break;
      case 'right':
        moveRight();
        break;
      default:
        break;
    }
  };

  return {
    init() {
      console.log('init 2048');
      board = Array.from(Array(4), () => new Array(4).fill(0));

      generateNumber();
    },

    clickDirection({ target }) {
      const { direction } = target.dataset;
      selectDirection(direction);
    },

    keyboardDirection({ code }) {
      const keycode = {
        ArrowUp: 'up',
        ArrowDown: 'down',
        ArrowLeft: 'left',
        ArrowRight: 'right',
      };
      selectDirection(keycode[code]);
    },
  };
})();

$buttonGroup.onclick = game2048.clickDirection;

window.onkeyup = game2048.keyboardDirection;
window.addEventListener('DOMContentLoaded', game2048.init());
