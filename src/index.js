import './styles.css';
import populate from './modules/populateList.js';
import { getAddedTodos, form } from './modules/newtodo.js';
import clearCompleted from './modules/clearCompleted.js';

populate();
form.addEventListener('submit', getAddedTodos);
clearCompleted();