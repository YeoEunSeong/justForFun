const $list = document.querySelector('.ranking');

const render = () => {
  const createImage = id => `<img data-id="${id}" src="img/image${(id < 10 ? '0' : '') + id}.jpeg" alt="cat" />`;

  const ranking = Object.keys(localStorage)
    .map(id => ({ id, count: localStorage.getItem(id) }))
    .sort((a, b) => b.count - a.count);

  console.log(ranking);

  const list = ranking
    .map((rank, index) => `<li><span>${index + 1}등 ${rank.count}회 우승</span>${createImage(rank.id)}</li>`)
    .join('');

  $list.innerHTML = `<ol>${list}</ol>`;
};

window.addEventListener('DOMContentLoaded', render);
