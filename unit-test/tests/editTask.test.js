import createMockDocument from '../mocks/documentMock.js';
import { getAddedTodos } from '../../src/modules/newtodo.js';
import { todo } from '../../src/modules/displayList.js';

function addInputDescription(value, input) {
  input.value = value;
}

describe('edit task', () => {
  it("edits the first task's description", () => {
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
    const newDescription = 'edited-1';
    const paragraph = listSection.children[0].children[
      index
    ].querySelector('#task-description');
    paragraph.textContent = newDescription;

    todo.editTodo(paragraph, index);

    expect(todo.allTodos[index - 1].description).toEqual(
      newDescription,
    );
  });
});
