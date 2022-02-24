import { createTodo, todo } from './displayList.js';

const clearCompleted = () => {
  todo.clearCompleted();
  createTodo();
};

export default clearCompleted;