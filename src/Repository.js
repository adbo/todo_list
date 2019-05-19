import Todo from './Todo.js';

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
    const storageTodos = JSON.parse(this.storage.getItem('todos'));
    if (storageTodos !== null) {
      storageTodos.map(todo => this.addTodo(Object.assign(new Todo, todo)));
    }

    return this.todos;
  }
}
