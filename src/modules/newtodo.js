import { createTodo, todo } from './displayList.js';

const form = document.getElementById('form');

const getAddedTodos = () => {
  const description = document.getElementById('new-todo').value;
  if (description !== '') {
    todo.addTodo(description);
    createTodo();
    form.reset();
  }
};

export { getAddedTodos, form };