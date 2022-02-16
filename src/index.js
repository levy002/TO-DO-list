import './styles.css';
import populate from './modules/populateList.js';
import { getAddedTodos, form } from './modules/newtodo.js';

populate();
form.addEventListener('submit', getAddedTodos);