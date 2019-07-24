import Todo from './Todo.js';

export default class Repository {
  constructor(todos = []) {
    this.todos = todos;
    this.storage = localStorage;
  }

  add(todo, saveChanges=true) {
    const index = this.todos.indexOf(todo);
    index !== -1 ? this.todos[index] = todo : this.todos.push(todo);
    saveChanges && this.save();
  }

  remove(todo, saveChanges=true) {
    const index = this.todos.indexOf(todo);
    if (index !== -1)
      this.todos.splice(index, 1);
    saveChanges && this.save();
    return index;
  }

  save() {
    this.storage.todos = JSON.stringify(this.todos);
  }

  loadStorage() {
    try {
      return localStorage.todos ? JSON.parse(this.storage.todos) : [];
    } catch (e) {
      console.log(`Unable to load todos ${e}`);
      return [];
    }
  }

  load() {
    this.loadStorage().forEach(todo => this.add(Object.assign(new Todo(), todo), false));
    return this.todos;
  }
}
