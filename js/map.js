import {initFormStartState} from './form';
import {createCard} from './card';
const MAIN_ICON_WIDTH = 52;
const MAIN_ICON_HEIGHT = 52;
const BASIC_ICON_WIDTH = 40;
const BASIC_ICON_HEIGHT = 40;
const tokyoCityCenter = {
  lat: 35.652832,
  lng: 139.839478,
};
const mainMapIcon = L.icon({
  iconUrl:'./img/main-pin.svg',
  iconSize: [MAIN_ICON_WIDTH, MAIN_ICON_HEIGHT],
  iconAnchor: [MAIN_ICON_WIDTH/2, MAIN_ICON_HEIGHT],
});
const basicMapIcon = L.icon({
  iconUrl:'./img/pin.svg',
  iconSize: [BASIC_ICON_WIDTH, BASIC_ICON_HEIGHT],
  iconAnchor: [BASIC_ICON_WIDTH/2, BASIC_ICON_HEIGHT],
});

//Map rendering function
const renderingMap = () => {
  const mapRendering = L.map('map-canvas')
    .on('load', () => {
      initFormStartState();
    })
    .setView(tokyoCityCenter, 10);
  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(mapRendering);
};

// Creating main default marker
const createMainDefaultMapMarker = () => {
  const defaultMapMarker = L.marker (
    {
      tokyoCityCenter,
    },
    {
      mainMapIcon,
    },
  );
  defaultMapMarker.addTo(renderingMap);
};
createMainDefaultMapMarker(); //Временно чтоб не ругалась проверка

//Creating simple map marker based on received data
const createMapMarker = (data) => {
  const mapMarker = L.marker (
    {
      lat: data.location.lat,
      lng: data.location.lng,
    },
    {
      basicMapIcon,
    },
  );
  mapMarker.addTo(renderingMap).bindPopup(createCard, {keepInView: true});
  return mapMarker;
};
//
const markerGroup = L.layerGroup();

const createMarkers= (elements) => {
  markerGroup.clearLayers();
  elements.forEach((item) => markerGroup.addLayer(createMapMarker(item))),
  markerGroup.addTo(renderingMap);
  return markerGroup;
};
createMarkers(); //Временно чтоб не ругалась проверка

export {renderingMap, createMainDefaultMapMarker, createMapMarker, createMarkers};
