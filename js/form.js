const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE_LENGTH = 1000000;
const MAX_ROOMS = 100;
const ZERO_VALUE = 0;
const typeToMinPrice = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const formTypeValue = document.getElementById('type').value;
const adFormTitleInput = document.getElementById('title');
const adFormPriceInput = document.getElementById('price');
const adFormRoomsInput = document.getElementById('room_number');
const adFormCapacityInput = document.getElementById('capacity').value;

const initFormStartState = () => {
  const formAd = document.querySelector('.ad-form');
  formAd.classList.toggle('ad-form--disabled');
  formAd.setAttribute('disabled', true);
  const mapFilters = document.querySelector('.map__filters');
  mapFilters.classList.toggle('map__filters--disabled');
  mapFilters.setAttribute('disabled', true);
};

//Title validity check
const onFormTitleInput = (evt) => {
  const titleElement = evt.currentTarget;
  const titleLength = evt.currentTarget.value.length;
  if (titleLength < MIN_TITLE_LENGTH) {
    titleElement.setCustomValidity(`Осталось ввести ${MIN_TITLE_LENGTH - titleLength} симв.`);
  } else if (titleLength > MAX_TITLE_LENGTH) {
    titleElement.setCustomValidity(`Удалите лишние ${titleLength - MAX_TITLE_LENGTH} симв.`);
  } else {
    titleElement.setCustomValidity('');
  }
  titleElement.reportValidity();
};

//Price validity check
const onFormPriceInput = (evt) => {
  const priceElement = evt.currentTarget;
  const priceValue = evt.currentTarget.value;
  if (typeToMinPrice[formTypeValue] >= priceValue) {
    priceElement.setCustomValidity('Значение меньше минимального');
  } else if (priceValue > MAX_PRICE_LENGTH) {
    priceElement.setCustomValidity('Значение больше максимального');
  } else {
    priceElement.setCustomValidity('');
  }
  priceElement.reportValidity(); //Можно ли это место тоже заменить на priceElement?
};

//Rooms and Capacity validity check
const onFormRoomsInput = (evt) => {
  const roomsElement = evt.currentTarget;
  const roomsValue = evt.currentTarget.value;
  if (+roomsValue === MAX_ROOMS && +adFormCapacityInput !== ZERO_VALUE) {
    roomsElement.setCustomValidity('Не соответствует условиям размещения');
  } else if (+roomsValue <= +adFormCapacityInput) { //А как убрать в константу input capacity? Ведь так получается мы опять объявляем его выше, а используем только тут
    roomsElement.setCustomValidity('Не соответствует условиям размещения');
  } else {
    roomsElement.setCustomValidity('');
  }
  roomsElement.reportValidity();
};

adFormTitleInput.addEventListener('input', onFormTitleInput);
adFormPriceInput.addEventListener('input', onFormPriceInput);
adFormRoomsInput.addEventListener('input', onFormRoomsInput);
export {initFormStartState};
