import {generateRentList} from './data.js';
import {createCard} from './card.js';
import {initFormStartState} from '../form';
import {renderingMap, createMainDefaultMapMarker, createMapMarker, createMarkers} from './map';

const data = generateRentList();
createCard(data[1]);
data.length;

const form = initFormStartState();
form.length;

renderingMap();
createMainDefaultMapMarker();
createMapMarker();
createMarkers();
