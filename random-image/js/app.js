const catGenerator = (() => {
  const LAST_NUMBER = 16;
  const $image = document.querySelector('.cat-image');

  let prevImage = 0;

  return {
    nextImage() {
      let randomNumber = Math.floor(Math.random() * LAST_NUMBER) + 1;
      while (randomNumber === prevImage) {
        randomNumber = Math.floor(Math.random() * LAST_NUMBER) + 1;
      }

      prevImage = randomNumber;
      $image.src = `img/image${(randomNumber < 10 ? '0' : '') + randomNumber}.jpeg`;
    },
  };
})();

document.querySelector('.next').onclick = catGenerator.nextImage;
