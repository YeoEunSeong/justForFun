const $left = document.querySelector('.left');
const $right = document.querySelector('.right');
const $wrapper = document.querySelector('.wrapper');
const $stage = document.querySelector('.stage');
const $winnerPopup = document.querySelector('.winner-popup');
const $winnerCountPopup = document.querySelector('.winner-count-popup');

const stages = {
  16: '16강',
  8: '8강',
  4: '4강',
  2: '결승',
};

const createImage = id => `<img data-id="${id}" src="img/image${(id < 10 ? '0' : '') + id}.jpeg" alt="cat" />`;

const initial = () => {
  let round = 16;
  let leftIndex = 0;
  let images = [];
  let winners = Array.from(Array(round).keys());

  const suffle = array => {
    let suffledArray = [...array];

    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // 무작위 인덱스(0 이상 i 미만)
      [suffledArray[i], suffledArray[j]] = [suffledArray[j], suffledArray[i]];
    }

    return suffledArray;
  };

  const createImage = id => `<img data-id="${id}" src="img/image${(id < 10 ? '0' : '') + id}.jpeg" alt="cat" />`;

  const showImage = leftIndex => {
    $left.innerHTML = createImage(images[leftIndex]);
    $right.innerHTML = createImage(images[leftIndex + 1]);
  };

  const setWinnerCount = id => {
    const currentWinningCount = +localStorage.getItem(id) ?? 0;
    localStorage.setItem(id, currentWinningCount + 1);
  };

  const setMatches = () => {
    if (round === 1) {
      $winnerPopup.classList.remove('hidden');
      $winnerPopup.innerHTML += `<img class="winner" src="img/image${
        (winners[0] < 10 ? '0' : '') + winners[0]
      }.jpeg" alt="cat" />
      <a href="ranking.html">고양이 우승 횟수 보기</a>`;
      setWinnerCount(winners[0]);
    } else {
      alert(stages[round]);
      $stage.textContent = stages[round];
      leftIndex = 0;

      images = suffle(winners);
      console.log(winners);
      winners = [];
      showImage(leftIndex);
    }
  };

  setMatches(round);

  $wrapper.onclick = ({ target }) => {
    if (round <= 1) return;
    let winnerId = target.matches('.left, .left *') ? images[leftIndex] : images[leftIndex + 1];
    winners = [...winners, winnerId];
    leftIndex += 2;

    if (leftIndex === round) {
      round /= 2;
      setMatches(round);
    } else {
      showImage(leftIndex);
    }
  };
};

window.addEventListener('DOMContentLoaded', initial);
