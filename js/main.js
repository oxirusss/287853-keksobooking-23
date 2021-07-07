import {generateRentList} from './data.js';
import {renderCard} from './card.js';
import {formAdState} from '../form';

const data = generateRentList();
renderCard(data[1]);
data.length;

const form = formAdState();
form.length;
