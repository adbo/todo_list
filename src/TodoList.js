export default class TodoList {
  constructor(todos = []) {
    this.todos = todos;
  }

  add(todo) {
    this.todos.push(todo);
  }
}
