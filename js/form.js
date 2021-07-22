import {sendData} from './api.js';

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

const form = document.querySelector('.ad-form');
const formTypeValue = document.getElementById('type').value;
const adFormTitleInput = document.getElementById('title');
const adFormPriceInput = document.getElementById('price');
const adFormRoomsInput = document.getElementById('room_number');
const adFormCapacityInput = document.getElementById('capacity').value;
const formTimeInElement = document.getElementById('timein');
const formTimeOutElement = document.getElementById('timeout');

const initFormStartState = () => {
  const formAd = document.querySelector('.ad-form');
  formAd.classList.toggle('ad-form--disabled');
  formAd.setAttribute('disabled', true);
  const mapFilters = document.querySelector('.map__filters');
  mapFilters.classList.toggle('map__filters--disabled');
  mapFilters.setAttribute('disabled', true);
};

const onFormSuccess = () => {
  const formSuccessMessage = document.getElementById('#success').content.cloneNode(true);
  document.body.appendChild(formSuccessMessage);
  form.reset();
};

const showErrorMessage = () => {
  const formErrorMessage =  document.getElementById('#error').content.cloneNode(true);
  document.body.appendChild(formErrorMessage);
};

//Cancelling form default actions
const onSubmitForm = (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  sendData(formData, onFormSuccess, showErrorMessage);
};

const onFormReset = () => {
  form.reset();
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
  priceElement.reportValidity();
};

//Rooms and Capacity validity check
const onFormRoomsInput = (evt) => {
  const roomsElement = evt.currentTarget;
  const roomsValue = evt.currentTarget.value;
  if (+roomsValue === MAX_ROOMS && +adFormCapacityInput !== ZERO_VALUE) {
    roomsElement.setCustomValidity('Не соответствует условиям размещения');
  } else if (+roomsValue <= +adFormCapacityInput) {
    roomsElement.setCustomValidity('Не соответствует условиям размещения');
  } else {
    roomsElement.setCustomValidity('');
  }
  roomsElement.reportValidity();
};

//Housing Change
const onFormHouseTypeChange = (evt) => {
  const houseType = evt.currentTarget.value;
  adFormPriceInput.setAttribute('min', typeToMinPrice[houseType]);
  adFormPriceInput.placeholder = typeToMinPrice[houseType];
};

//Time Change
const onTimeChange = (evt) => {
  const timeElement = evt.currentTarget;
  const timeElementName = timeElement.name;
  if(timeElementName === 'timein') {
    formTimeOutElement.selectedIndex = timeElement.selectedIndex;
  } else {
    formTimeInElement.selectedIndex = timeElement.selectedIndex;
  }
};

adFormTitleInput.addEventListener('input', onFormTitleInput);
adFormPriceInput.addEventListener('input', onFormPriceInput);
adFormRoomsInput.addEventListener('input', onFormRoomsInput);
formTypeValue.addEventListener('change', onFormHouseTypeChange);
formTimeOutElement.addEventListener('change', onTimeChange);
formTimeInElement.addEventListener('change', onTimeChange);
form.addEventListener('submit', onSubmitForm);

export {initFormStartState};
