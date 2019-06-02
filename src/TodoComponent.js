export default class TodoComponent {
  constructor(todo, todoList) {
    this.todo = todo;
    this.todoList = todoList;
    this.li = document.createElement('li');
  }

  render() {
    const todoText = document.createTextNode(this.todo.name);
    const removeTodo = document.createElement('div');

    removeTodo.classList.add('remove-element');

    this.li.appendChild(todoText);
    this.li.appendChild(removeTodo);
    if (this.todo.isDone()) {
      this.li.classList.add('done');
    }
    this.li.onclick = this.toggle.bind(this);
    removeTodo.onclick = this.remove.bind(this);

    return this.li;
  }

  toggle() {
    if (this.todo.isDone()) {
      this.li.classList.remove('done');
    } else {
      this.li.classList.add('done');
    }
    this.todo.toggle();
    this.todoList.toggle(this);
  }

  remove(event) {
    this.todoList.removeElement(this);
    event.stopPropagation();
  }
}
