import TodoList from './listclass.js';

const todo = new TodoList();
const listSection = document.querySelector('.list-section');
const createTodo = () => {
  listSection.replaceChildren();
  if (todo.allTodos.length > 0) {
    listSection.style.display = 'block';
    const listContainer = document.createElement('ul');
    listContainer.className = 'allTodos';
    listSection.appendChild(listContainer);
    todo.allTodos.map((a) => {
      const list = document.createElement('li');
      list.className = 'todo';

      const descrptContainer = document.createElement('div');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = 'checkbox';
      if (a.completed === true) {
        checkbox.checked = 'checked';
      }

      descrptContainer.appendChild(checkbox);

      const descrpt = document.createElement('p');
      descrpt.id = 'task-description';
      descrpt.textContent = a.description;
      descrptContainer.appendChild(descrpt);
      list.appendChild(descrptContainer);

      const dragIcon = document.createElement('i');
      dragIcon.className = 'fa fa-ellipsis-v';
      list.appendChild(dragIcon);

      const deleteIcon = document.createElement('i');
      deleteIcon.className = 'fa fa-trash';
      deleteIcon.id = a.index;
      list.appendChild(deleteIcon);
      deleteIcon.style.display = 'none';

      checkbox.addEventListener('click', (e) => {
        if (checkbox.checked === true) {
          descrpt.classList.add('todo-done');
        } else {
          descrpt.classList.remove('todo-done');
        }
        todo.completedTodo(e.target.checked, a.index);
      });

      list.onclick = () => {
        descrpt.contentEditable = 'true';
        deleteIcon.style.display = 'block';
        dragIcon.style.display = 'none';
        descrpt.addEventListener('keydown', () => {
          todo.editTodo(descrpt.innerHTML, a.index);
        });
      };

      deleteIcon.onclick = () => {
        todo.deleteTodo(a.index);
        todo.saveTodo();
        createTodo();
      };
      listContainer.append(list);
      return list;
    });
    listSection.appendChild(listContainer);
  }
};

export { createTodo, todo };