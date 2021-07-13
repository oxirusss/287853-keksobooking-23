const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE_LENGTH = 1000000;
const MIN_PRICES = {
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
adFormTitleInput.addEventListener('input', () => {
  const titleLength = adFormTitleInput.value.length;
  if (titleLength < MIN_TITLE_LENGTH) {
    adFormTitleInput.setCustomValidity(`Осталось ввести ${MIN_TITLE_LENGTH - titleLength} симв.`);
  } else if (titleLength > MAX_TITLE_LENGTH) {
    adFormTitleInput.setCustomValidity(`Удалите лишние ${titleLength - MAX_TITLE_LENGTH} симв.`);
  } else {
    adFormTitleInput.setCustomValidity('');
  }
  adFormTitleInput.reportValidity();
});

//Price validity check
adFormPriceInput.addEventListener('input', () => {
  const priceValue = adFormPriceInput.value;
  if (MIN_PRICES[formTypeValue] >= priceValue) {
    adFormPriceInput.setCustomValidity('Значение меньше минимального');
  } else if (priceValue > MAX_PRICE_LENGTH) {
    adFormPriceInput.setCustomValidity('Значение больше максимального');
  } else {
    adFormPriceInput.setCustomValidity('');
  }
  adFormPriceInput.reportValidity();
});

//Rooms and Capacity validity check
adFormRoomsInput.addEventListener('change', () => {
  if (+adFormRoomsInput.value === 100 && +adFormCapacityInput !== 0) {
    adFormRoomsInput.setCustomValidity('Не соответствует условиям размещения');
  } else if (+adFormRoomsInput.value <= +adFormCapacityInput) {
    adFormRoomsInput.setCustomValidity('Не соответствует условиям размещения');
  } else {
    adFormRoomsInput.setCustomValidity('');
  }
  adFormRoomsInput.reportValidity();
});

export {initFormStartState};
