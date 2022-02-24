import { createTodo, todo } from './displayList.js';

const deleteTask = (index) => {
  todo.deleteTodo(index);
  todo.saveTodo();
  createTodo();
};

export default deleteTask;