import { createTodo, todo } from './displayList.js';

const deleteTask = (index) => {
  todo.deleteTodo(index);
  todo.saveTodo();
  createTodo();
};

document.addEventListener('click', (e) => {
  if (e.target.className === 'fa fa-times') {
    deleteTask(e.target.id);
  }
});

export default deleteTask;