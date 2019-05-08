export default class TodoComponent {
  constructor(todo) {
    this.todo = todo;
  }

  render() {
    const li = document.createElement('li');
    const todoText = document.createTextNode(this.todo.name);

    li.appendChild(todoText);
    return li;
  }
}
