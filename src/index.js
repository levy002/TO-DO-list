import './styles.css';
import populate from './modules/populateList.js';
import { getAddedTodos, form } from './modules/newtodo.js';
import clearCompleted from './modules/clearCompleted.js';
import deleteTask from './modules/deleteTask.js';
import { todo } from './modules/displayList';

populate();
form.addEventListener('submit', getAddedTodos);
clearCompleted();

document.addEventListener('click', (e) => {
  if (e.target.className === 'fa fa-times') {
    deleteTask(e.target.id);
  }
});

document.addEventListener('keydown', (e) => {
  if (e.target.id === 'task-description') {
    todo.editTodo(e.target, a.index);
  }
});
