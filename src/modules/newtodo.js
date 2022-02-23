import { createTodo, todo } from './displayList.js';

const form = document.getElementById('form');

const getAddedTodos = () => {
  const newTodo = document.getElementById('new-todo');
  const description = newTodo.value;
  if (description !== '') {
    todo.addTodo(description);
    createTodo();
    newTodo.value = '';
  }
};

export { getAddedTodos, form };
