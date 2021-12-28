const lotteryPicker = (() => {
  const pickNumber = () => {
    const MIN_NUMBER = 1;
    const MAX_NUMBER = 45;
    const NUMBER_OF_TO_BE_PICKED = 6;
    const randomUniqueNumbers = new Set();

    while (randomUniqueNumbers.size < NUMBER_OF_TO_BE_PICKED) {
      const randomNumber = Math.floor(Math.random() * MAX_NUMBER) + MIN_NUMBER;
      randomUniqueNumbers.add(randomNumber);
    }

    return Array.from(randomUniqueNumbers).sort((a, b) => a - b);
  };

  return () => {
    const numbers = pickNumber();
    document.querySelector('.lottery-numbers').innerHTML = numbers
      .map(number => `<span class="lottery-number">${number}</span>`)
      .join('');
  };
})();

document.querySelector('.generate').onclick = lotteryPicker;
