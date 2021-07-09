const  initFormStartState = () => {
  const formAd = document.querySelector('.ad-form');
  formAd.classList.toggle('ad-form--disabled');
  formAd.toggleAttribute('disabled', true);
  const mapFilters = document.querySelector('.map__filters');
  mapFilters.classList.toggle('map__filters--disabled');
  mapFilters.toggleAttribute('disabled', true);
};

export {initFormStartState};
