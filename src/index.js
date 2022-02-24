import './styles.css';
// import 'animate.css';
import populate from './modules/populateList.js';
import { getAddedTodos, form } from './modules/newtodo.js';
import { clearCompleted, clearAll } from './modules/clear.js';

populate();
form.addEventListener('submit', getAddedTodos);
clearCompleted();
clearAll();