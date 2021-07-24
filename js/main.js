import {renderingMap, createMainDefaultMapMarker, createMapMarker, createMarkers} from './map.js';
import {getData} from './api.js';
import {initFormStartState, onFormSuccess, showErrorMessage} from './form.js';


getData(onFormSuccess, showErrorMessage);

renderingMap();
createMainDefaultMapMarker();
createMapMarker();
createMarkers();
initFormStartState();
