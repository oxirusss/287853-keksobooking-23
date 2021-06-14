const getRandomNumber = (min = 0, max = 0) =>
  Math.floor(min + Math.random() * (max - min));
const getRandomCoordinates = (min = 0, max = 0, floats = 1) =>
  (min + Math.random() * (max - min)).toFixed(floats);

// Берем рандомный элемент из списка
const getRandomElement = (list) => list[getRandomNumber(0, list.length - 1)];

// Берем рандомный элемент из списка который не повторяется
const getRandomElements = (list) => {
  const result = [];
  const amountOfRandomElements = getRandomNumber(1, list.length - 1);
  for (let i = 0; i <= amountOfRandomElements; i++) {
    let randomElement = getRandomElement(list);
    if (!result.includes(randomElement)) {
      result.push(randomElement);
    }
  }
  return result;
};

// Берем рандомный аватар и удаляем из списка чтобы не повторялся
const getRandomAvatar = () => {
  const randomAvatar =
    avatarsListNumbers[getRandomNumber(0, avatarsListNumbers.length - 1)];
  avatarsListNumbers.splice(avatarsListNumbers.indexOf(randomAvatar), 1);
  return randomAvatar;
};

const types = ["palace", "flat", "house", "bungalow", "hotel"];
const checkTimes = ["12:00", "13:00", "14:00"];
const featuresList = [
  "wifi",
  "dishwasher",
  "parking",
  "washer",
  "elevator",
  "conditioner",
];
const titles = [
  "Отличная в старом городе",
  "Молодежный прямо в центре",
  "с видом на залив",
  "Эксклюзивное",
  "для вечеринок и съёмок",
  "для романтических выходных",
  "по цене однушки",
  "со всеми удобствами",
  "с персональным бассейном",
  "со всеми удобствами",
];

const descriptions = [
  "Со всеми удобствами",
  "В стиле арт-деко",
  "Современная планировка",
  "Панорамные окна",
  "Хорошие соседи",
  "Прекрасный вид",
  "5 минут до центра",
  "Идеально с детьми",
  "Можно с животными",
  "Свежий ремонт",
];

const photosList = [
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg",
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg",
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg",
];

const avatarsListNumbers = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
];

// Создаем объект
const createRentElement = () => {
  const randomLatCoordinates = getRandomCoordinates(35.65, 35.7, 5);
  const randomLngCoordinates = getRandomCoordinates(139.7, 139.8, 5);
  const randomAvatarElement = `img/avatars/user${getRandomAvatar()}.png`;
  const randomTitleElement = getRandomElement(titles);
  const randomPrice = getRandomNumber(1000, 10000);
  const randomTypeElement = getRandomElement(types);
  const randomRoomsNumber = getRandomNumber(1, 6);
  const randomGuestsNumber = getRandomNumber(1, 10);
  const randomCheckinNumber = getRandomElement(checkTimes);
  const randomCheckoutNumber = getRandomElement(checkTimes);
  const randomFeaturesList = getRandomElements(featuresList);
  const randomDescriptionElement = getRandomElement(descriptions);
  const randomPhotosElements = getRandomElements(photosList);

  return {
    author: {
      avatar: randomAvatarElement,
    },
    offer: {
      title: randomTitleElement,
      address: `${randomLatCoordinates}, ${randomLngCoordinates}`,
      price: randomPrice,
      type: randomTypeElement,
      rooms: randomRoomsNumber,
      guests: randomGuestsNumber,
      checkin: randomCheckinNumber,
      checkout: randomCheckoutNumber,
      features: randomFeaturesList,
      description: randomDescriptionElement,
      photos: randomPhotosElements,
    },
    location: {
      lat: randomLatCoordinates,
      lng: randomLngCoordinates,
    },
  };
};

const rentList = [];

for (let i = 0; i < 10; i++) {
  rentList.push(createRentElement());
}
