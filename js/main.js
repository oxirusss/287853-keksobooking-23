const TYPES= ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECK_TIMES = ['12:00', '13:00', '14:00'];
const FEATURES_LIST = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const TITLES = [
  'Отличная в старом городе',
  'Молодежный прямо в центре',
  'с видом на залив',
  'Эксклюзивное',
  'для вечеринок и съёмок',
  'для романтических выходных',
  'по цене однушки',
  'со всеми удобствами',
  'с персональным бассейном',
  'со всеми удобствами',
];
const DESCRIPTIONS = [
  'Со всеми удобствами',
  'В стиле арт-деко',
  'Современная планировка',
  'Панорамные окна',
  'Хорошие соседи',
  'Прекрасный вид',
  '5 минут до центра',
  'Идеально с детьми',
  'Можно с животными',
  'Свежий ремонт',
];
const PHOTO_LIST = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const PRICE_MIN = 1000;
const PRICE_MAX = 10000;
const ROOM_MIN = 1;
const ROOM_MAX = 6;
const GUESTS_MIN = 1;
const GUESTS_MAX = 10;

const getRandomNumber = (min = 0, max = 0) =>
  Math.floor(min + Math.random() * (max - min));
const getRandomCoordinates = (min = 0, max = 0, floats = 1) =>
  (min + Math.random() * (max - min)).toFixed(floats);

// Берем рандомный элемент из списка
const getRandomElement = (list) => list[getRandomNumber(0, list.length - 1)];
const getRandomAvatarNumber = (number) => {
  if (number < 10) {
    return `0${number}`;
  }
  return `${number}`;
};

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

// Создаем объект
const createRentElement = (index) => {
  const randomAvatarElement = `img/avatars/user${getRandomAvatarNumber(index)}.png`;
  const randomTitleElement = getRandomElement(TITLES);
  const randomPrice = getRandomNumber(PRICE_MIN, PRICE_MAX);
  const randomTypeElement = getRandomElement(TYPES);
  const randomRoomsNumber = getRandomNumber(ROOM_MIN, ROOM_MAX);
  const randomGuestsNumber = getRandomNumber(GUESTS_MIN, GUESTS_MAX);
  const randomCheckinNumber = getRandomElement(CHECK_TIMES);
  const randomCheckoutNumber = getRandomElement(CHECK_TIMES);
  const randomFeaturesList = getRandomElements(FEATURES_LIST);
  const randomDescriptionElement = getRandomElement(DESCRIPTIONS);
  const randomPhotosElements = getRandomElements(PHOTO_LIST);
  const location = {
    lat: getRandomCoordinates(35.65, 35.7, 5),
    lng: getRandomCoordinates(139.7, 139.8, 5),
  };
  return {
    author: {
      avatar: randomAvatarElement,
    },
    offer: {
      title: randomTitleElement,
      address: `${location.lat}, ${location.lng}`,
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
    location,
  };
};

const rentList = [];

for (let index = 1; index < 11; index++) {
  rentList.push(createRentElement(index));
}
