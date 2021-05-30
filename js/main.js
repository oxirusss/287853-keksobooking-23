const getRandomNumber = (min = 0, max = 0) => Math.floor(min + Math.random() * (max  - min));
const getRandomCoordinates = (min = 0, max = 0, floats = 1) => (min + Math.random() * (max  - min)).toFixed(floats);

getRandomNumber(10, 100);
getRandomCoordinates(10, 100, 2);
