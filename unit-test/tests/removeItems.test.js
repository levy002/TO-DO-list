import createMockDocument from '../mocks/documentMock.js';
import { getAddedTodos } from '../../src/modules/newtodo.js';
import { todo } from '../../src/modules/displayList.js';
import deleteTask from '../../src/modules/deleteTask.js';

function addInputDescription(value, input) {
  input.value = value;
}

describe('add item', () => {
  it('remove the exact number of task elements to the list container ', () => {
    todo.allTodos = [];
    createMockDocument('description-1');
    global.localStorage.clear();

    const listSection = document.querySelector('.list-section');
    getAddedTodos();
    deleteTask(1);
    expect(listSection.children.length).toEqual(
      0,
    );
  });

  it('remove the exact number of task elements to the list container ', () => {
    todo.allTodos = [];
    createMockDocument('description-1');
    global.localStorage.clear();

    const listSection = document.querySelector('.list-section');
    const newTodo = document.getElementById('new-todo');

    getAddedTodos();
    addInputDescription('description-2', newTodo);
    getAddedTodos();

    deleteTask(2);

    expect(listSection.children[0].children.length).toEqual(
      1,
    );
  });

  it('remove the exact number of task elements to the list container ', () => {
    todo.allTodos = [];
    createMockDocument('description-1');
    global.localStorage.clear();

    const listSection = document.querySelector('.list-section');
    const newTodo = document.getElementById('new-todo');

    getAddedTodos();
    addInputDescription('description-2', newTodo);
    getAddedTodos();

    deleteTask(1);

    addInputDescription('description-3', newTodo);
    getAddedTodos();

    expect(listSection.children[0].children.length).toEqual(
      2,
    );
  });
});
