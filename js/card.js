const cardTemplate = document.querySelector('#card').content;
const newCardTemplate = cardTemplate.querySelector('.popup');
const canvasMap = document.querySelector('#map-canvas');
const housingType = {'palace': 'Дворец', 'flat': 'Квартира', 'bungalow': 'Бунгало', 'house': 'Дом', 'hotel': 'Отель'};


const createCard = (data) => {
  const card = newCardTemplate.cloneNode(true);

  const title = card.querySelector('.popup__title');
  title.textContent = data.offer.title;

  const address = card.querySelector('.popup__text--address');
  address.textContent = data.offer.address;

  const price = card.querySelector('.popup__text--price');
  price.textContent = `${data.offer.price} ₽/ночь`;

  const houseType = card.querySelector('.popup__type');
  houseType.textContent = housingType[data.offer.type];

  const capacity = card.querySelector('.popup__text--capacity');
  capacity.textContent = `${data.offer.rooms} комнаты для ${data.offer.guests} гостей`;

  const time = card.querySelector('.popup__text--time');
  time.textContent = `Заезд после ${data.offer.checkin}, выезд до ${data.offer.checkout}`;

  // Features check
  //Находим элемент
  const features = card.querySelector('.popup__features');
  //Проходим по массиву features, получаем массив уже с модификатором
  const modifiers = data.offer.features.map((feature) => `popup__feature--${feature}`);
  //Проверяем весь список, на наличие соответствующих элементов,
  // если да, оставляем его, иначе удаляем. forEach - вызвана для каждого элемента, через нее выполним проверку соответствующего класса
  features.querySelectorAll('.popup__feature').forEach((item) => {
    //  Извлекаем из элемента второй класс
    const modifier = item.classList[1];
    // Проверка на соответствие
    if (!modifiers.includes(modifier)) {
      item.remove();
    }
  });

  const description = card.querySelector('.popup__description');
  description.textContent = data.offer.description;

  const photos = card.querySelector('.popup__photos');
  photos.src = data.offer.photos;

  const avatar = card.querySelector('img');
  avatar.src = data.author.avatar;
};

const renderCard = (card) => {
  const createdCard = createCard(card);
  canvasMap.appendChild(createdCard);
};

export {renderCard};

