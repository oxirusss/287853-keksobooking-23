import {generateRentList} from './data.js';
import {renderCard} from './card.js';

const data = generateRentList();
renderCard(data[1]);
data.length;

