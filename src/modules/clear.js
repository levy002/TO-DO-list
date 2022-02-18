import { createTodo, todo } from './displayList.js';

const clearCompletedButton = document.getElementById('clear-completed');
const clearAllButton = document.getElementById('clearAll');

const clearCompleted = () => {
  clearCompletedButton.addEventListener('click', () => {
    todo.clearCompleted();
    createTodo();
  });
};

const clearAll = () => {
  clearAllButton.addEventListener('click', () => {
    todo.clearAll();
    createTodo();
  });
};

export { clearCompleted, clearAll };