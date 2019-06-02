import Todo from './Todo.js';

export default class Repository {
  constructor(todos = []) {
    this.todos = todos;
    this.storage = localStorage;
  }

  addTodo(todo, save=true) {
    this.todos = [...this.todos.filter(item => item.uuid !== todo.uuid), todo];
    if (save)
      this.saveTodos();
  }

  removeTodo(todo) {
    this.todos = [...this.todos.filter(item => item.uuid !== todo.uuid)];
    this.saveTodos();
  }

  saveTodos() {
    this.storage.setItem('todos', JSON.stringify(this.todos));
  }

  loadTodos() {
    const storageTodos = JSON.parse(this.storage.getItem('todos'));
    if (storageTodos !== null) {
      storageTodos.map(todo => this.addTodo(Object.assign(new Todo(), todo)), false);
    }

    return this.todos;
  }
}
