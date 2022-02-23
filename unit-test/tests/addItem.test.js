import createMockDocument from '../mocks/documentMock.js';
import { getAddedTodos } from '../../src/modules/newtodo.js';
import { todo } from '../../src/modules/displayList.js';

function addInputDescription(value, input) {
  input.value = value;
}

describe('add item', () => {
  it('creates a container element inside the listSection', () => {
    createMockDocument('description-1');
    localStorage.clear();
    const listSection = document.querySelector('.list-section');

    getAddedTodos();

    expect(listSection.children[0].className).toEqual(
      'allTodos',
    );
  });

  it('creates a task list element inside the list container', () => {
    todo.allTodos = [];
    createMockDocument('description-2');
    localStorage.clear();
    const listSection = document.querySelector('.list-section');

    getAddedTodos();

    expect(
      listSection.children[0].children[0].className,
    ).toEqual('todo');
  });

  it('adds the exact number of task elements to the list container ', () => {
    todo.allTodos = [];
    createMockDocument('description-3');
    global.localStorage.clear();

    const listSection = document.querySelector('.list-section');
    const newTodo = document.getElementById('new-todo');

    getAddedTodos();
    addInputDescription('description-4', newTodo);
    getAddedTodos();
    addInputDescription('description-5', newTodo);
    getAddedTodos();

    expect(listSection.children[0].children.length).toEqual(
      3,
    );
  });
});
