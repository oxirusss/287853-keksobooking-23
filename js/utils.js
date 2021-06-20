const getRandomNumber = (min = 0, max = 0) =>
  Math.floor(min + Math.random() * (max - min));
const getRandomCoordinates = (min = 0, max = 0, floats = 1) =>
  (min + Math.random() * (max - min)).toFixed(floats);

// Берем рандомный элемент из списка
const getRandomElement = (list) => list[getRandomNumber(0, list.length - 1)];
const getRandomAvatarNumber = (number) => number < 10 ? `0${number}`: `${number}`;

// Берем рандомный элемент из списка который не повторяется
const getRandomElements = (list) => {
  const result = new Set();
  const amountOfRandomElements = getRandomNumber(1, list.length - 1);
  for( let index = 0; index < amountOfRandomElements; index++){
    const randomItem = getRandomElement(list);
    result.add(randomItem);
  }
  return Array.from(result);
};

export {getRandomNumber, getRandomAvatarNumber, getRandomElement, getRandomElements, getRandomCoordinates};

