function randomNumber(min, max) {
  if(max  <= min) {
    throw Error('Число верхней границы меньше чем нижней');
  }
  return Math.floor(min + Math.random() * (max  - min));
}

function randomCoordinates(min, max, floats) {
  if(max  <= min) {
    throw Error('Число верхней границы меньше чем нижней');
  }
  const floatNumber = min + Math.random() * (max  - min);
  return floatNumber.toFixed(floats);
}

randomNumber(10, 100);
randomCoordinates(10, 100, 2);
