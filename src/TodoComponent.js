export default class TodoComponent {
  constructor(todo) {
    this.todo = todo;
    this.li = document.createElement('li');
  }

  render() {
    const todoText = document.createTextNode(this.todo.name);

    this.li.appendChild(todoText);
    if(this.todo.isDone()) {
      this.li.classList.add("done");
    }
    this.li.onclick = this.toggle.bind(this);
    return this.li;
  }

  toggle() {
    this.todo.isDone() ?
      this.li.classList.remove("done") :
      this.li.classList.add("done");
    this.todo.setDone();
  }
}
