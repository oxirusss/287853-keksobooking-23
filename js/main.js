import {generateRentList} from './data.js';
import {createCard} from './card.js';
import {initFormStartState} from './form.js';
import {renderingMap, createMainDefaultMapMarker, createMapMarker, createMarkers} from './map.js';
import {getData} from './data1.js';

const form = initFormStartState();
form.length;

getData(data => {
  createMarkers(data);
});

renderingMap();
createMainDefaultMapMarker();
createMapMarker();
createMarkers();
