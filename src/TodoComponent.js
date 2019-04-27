export default class TodoComponent {
  constructor(todo) {
    this.todo = todo;
  }

  render() {
    const li = document.createElement("li");
    const todo_text = document.createTextNode(this.todo.name);

    li.appendChild(todo_text);
    return li;
  }
}