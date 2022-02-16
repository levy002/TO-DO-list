import { createTodo, todo } from './displayList.js';

const populate = () => {
  if (localStorage.getItem('todos')) {
    todo.getStoredTodos();
    createTodo();
  } else {
    createTodo();
  }
};

export default populate;