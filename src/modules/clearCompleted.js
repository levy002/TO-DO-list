import { createTodo, todo } from './displayList.js';

const clearCompletedButton = document.getElementById('clear-completed');
const clearCompleted = () => {
  clearCompletedButton.addEventListener('click', () => {
    todo.clearCompleted();
    createTodo();
  });
};

export default clearCompleted;