const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const canvasMap = document.querySelector('#map-canvas');
const HousingType = {
  PALACE: 'Дворец',
  FLAT: 'Квартира',
  BUNGALOW: 'Бунгало',
  HOUSE: 'Дом',
  HOTEL: 'Отель',
};

const createFeaturesElements = (data) => {
  const featuresList = document.createDocumentFragment();
  for (const item of data) {
    const element = document.createElement('li');
    element.classList.add('popup__feature', `popup__feature--${item}`);
    featuresList.appendChild(element);
  }
  return featuresList;
};

const createPhotoElements = (data) => {
  const photoList = document.createDocumentFragment();
  for (const item of data) {
    const photoElement = document.createElement('img');
    photoElement.classList.add('popup__photo');
    photoElement.setAttribute('src', item);
    photoElement.setAttribute('alt', data.offer.type);
    photoList.appendChild(photoElement);
  }
  return photoList;
};

const createCard = (data) => {
  const card = cardTemplate.cloneNode(true);

  //Title check
  if (data.offer.title) {
    const title = card.querySelector('.popup__title');
    title.textContent = data.offer.title;
  }
  //Address check
  if (data.offer.address) {
    const address = card.querySelector('.popup__text--address');
    address.textContent = data.offer.address;
  }
  //Price check
  if (data.offer.price) {
    const price = card.querySelector('.popup__text--price');
    price.textContent = `${data.offer.price} \u20bd/ночь`;
  }
  //Type check
  if (data.offer.type) {
    const houseType = card.querySelector('.popup__type');
    houseType.textContent = HousingType[data.offer.type];
  }
  //Rooms check
  if (data.offer.rooms && data.offer.guests) {
    const capacity = card.querySelector('.popup__text--capacity');
    capacity.textContent = `${data.offer.rooms} комнаты для ${data.offer.guests} гостей`;
  }
  if (data.offer.rooms) {
    const capacityRooms = card.querySelector('.popup__text--capacity');
    capacityRooms.textContent = `${data.offer.rooms} комнат`;
  }
  if (data.offer.guests) {
    const capacityGuests = card.querySelector('.popup__text--capacity');
    capacityGuests.textContent = `${data.offer.rooms} гостей`;
  }
  //Time check
  if (data.offer.checkin && data.offer.checkout) {
    const time = card.querySelector('.popup__text--time');
    time.textContent = `Заезд после ${data.offer.checkin}, выезд до ${data.offer.checkout}`;
  }
  // Features check
  if (data.offer.features.length > 0) {
    const featuresList = document.querySelector('.popup__features');
    const featuresItems = createFeaturesElements(data.offer.features);
    featuresList.appendChild(featuresItems);
  }
  // Description check
  const description = card.querySelector('.popup__description');
  description.textContent = data.offer.description;
  //Photos check
  if (data.offer.photos.length > 0) {
    const photoList = document.querySelector('.popup__photos');
    const photoElement = createPhotoElements(data.offer.photos);
    photoList.appendChild(photoElement);
  }
  //Avatar check
  const avatar = card.querySelector('img');
  avatar.src = data.author.avatar;
};

const renderCard = (card) => {
  const createdCard = createCard(card);
  canvasMap.appendChild(createdCard);
};

export {renderCard};
