export default class TodoList {
  allTodos = [];

  saveTodo() {
    const todos = JSON.stringify(this.allTodos);
    localStorage.setItem('todos', todos);
  }

  addTodo(description) {
    const todo = {
      description,
      completed: false,
      index: this.allTodos.length + 1,
    };
    this.allTodos.push(todo);
    this.saveTodo();
  }

  deleteTodo(indx) {
    this.allTodos.splice(indx - 1, 1);
    this.updateIndex();
    this.saveTodo();
  }

  getStoredTodos() {
    this.allTodos = JSON.parse(localStorage.getItem('todos'));
  }

  editTodo(paragraph, index) {
    this.allTodos[index - 1].description = paragraph.innerText;
    this.saveTodo();
  }

  completedTodo(status, index) {
    this.allTodos[index - 1].completed = status;
    this.saveTodo();
  }

  clearCompleted() {
    this.allTodos = this.allTodos.filter((b) => b.completed === false);
    this.updateIndex();
    this.saveTodo();
  }

  clearAll() {
    this.allTodos.splice(0, this.allTodos.length);
    this.saveTodo();
  }

  updateIndex() {
    this.allTodos.map((a) => {
      a.index = (this.allTodos.indexOf(a) + 1);
      return a;
    });
  }
}
