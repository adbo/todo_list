export default class Repository {
  constructor(todos = []) {
    this.todos = todos;
    this.storage = localStorage;
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  getTodos() {
    return this.todos;
  }

  saveTodos() {
    this.storage.setItem('todos', JSON.stringify(this.todos));
  }

  loadTodos() {
    return JSON.parse(this.storage.getItem('todos'));
  }
}
