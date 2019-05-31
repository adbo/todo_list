export default class TodoComponent {
  constructor(todo, repository) {
    this.todo = todo;
    this.repository = repository;
    this.li = document.createElement('li');
  }

  render() {
    const todoText = document.createTextNode(this.todo.name);

    this.li.appendChild(todoText);
    if (this.todo.isDone()) {
      this.li.classList.add('done');
    }
    this.li.onclick = this.toggle.bind(this);
    return this.li;
  }

  toggle() {
    if (this.todo.isDone()) {
      this.li.classList.remove('done');
    } else {
      this.li.classList.add('done');
    }
    this.todo.toggle();
    this.repository.addTodo(this.todo);
    this.repository.saveTodos();
  }
}
