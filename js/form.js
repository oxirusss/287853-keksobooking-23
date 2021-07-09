const  initFormStartState = () => {
  const formAd = document.querySelector('.ad-form');
  formAd.classList.toggle('ad-form--disabled');
  formAd.setAttribute('disabled', 'true');
  const mapFilters = document.querySelector('.map__filters');
  mapFilters.classList.toggle('map__filters--disabled');
  mapFilters.setAttribute('disabled', 'true');
};

export {initFormStartState};
