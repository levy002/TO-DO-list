import createMockDocument from '../mocks/documentMock.js';
import { getAddedTodos } from '../../src/modules/newtodo.js';
import { todo } from '../../src/modules/displayList.js';
import clearCompleted from '../../src/modules/clearCompleted.js';

function addInputDescription(value, input) {
  input.value = value;
}

describe('clear completed task', () => {
  it(' delete one element using clear completed', () => {
    todo.allTodos = [];
    createMockDocument('description-1');
    localStorage.clear();
    const listSection = document.querySelector('.list-section');
    const newTodo = document.getElementById('new-todo');
    getAddedTodos();
    addInputDescription('description-2', newTodo);
    getAddedTodos();
    addInputDescription('description-3', newTodo);
    getAddedTodos();
    const index = 1;
    const checkbox = listSection.children[0].children[
      index
    ].querySelector('#checkbox');
    checkbox.checked = true;

    todo.completedTodo(checkbox.checked, index);
    clearCompleted();

    expect(todo.allTodos.length).toEqual(
      2,
    );
  });
});