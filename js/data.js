import {getRandomNumber, getRandomAvatarNumber, getRandomElement, getRandomElements, getRandomCoordinates} from './utils.js';

const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
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

// Создаем объект
const createRentElement = (index) => {
  const location = {
    lat: getRandomCoordinates(35.65, 35.7, 5),
    lng: getRandomCoordinates(139.7, 139.8, 5),
  };
  return {
    author: {
      avatar: `img/avatars/user${getRandomAvatarNumber(index)}.png`,
    },
    offer: {
      title: getRandomElement(TITLES),
      address: `${location.lat}, ${location.lng}`,
      price: getRandomNumber(PRICE_MIN, PRICE_MAX),
      type: getRandomElement(TYPES),
      rooms: getRandomNumber(ROOM_MIN, ROOM_MAX),
      guests: getRandomNumber(GUESTS_MIN, GUESTS_MAX),
      checkin: getRandomElement(CHECK_TIMES),
      checkout: getRandomElement(CHECK_TIMES),
      features: getRandomElements(FEATURES_LIST),
      description: getRandomElement(DESCRIPTIONS),
      photos: getRandomElements(PHOTO_LIST),
    },
    location,
  };
};

const generateRentList = () => {
  const rentList = [];

  for (let index = 0; index < 10; index++) {
    rentList.push(createRentElement(index + 1));
  }

  return rentList;
};

export {generateRentList};
