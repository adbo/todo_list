export default class TodoComponent {
  constructor(todo, todoList) {
    this.todo = todo;
    this.todoList = todoList;
    this.li = document.createElement('li');
  }

  render() {
    const nameTodo = document.createTextNode(this.todo.name);
    const toggleTodo = document.createElement('div');
    const textTodo = document.createElement('div');
    const removeTodo = document.createElement('div');

    toggleTodo.classList.add('toggle-todo');
    textTodo.classList.add('text-todo');
    removeTodo.classList.add('remove-todo');

    this.li.appendChild(toggleTodo);
    this.li.appendChild(textTodo);
    textTodo.appendChild(nameTodo);
    this.li.appendChild(removeTodo);
    if (this.todo.isDone()) {
      this.li.classList.add('done');
    }
    this.li.onclick = this.toggle.bind(this);
    removeTodo.onclick = this.remove.bind(this);

    return this.li;
  }

  toggle() {
    this.li.classList.toggle('done');
    this.todo.toggle();
    this.todoList.toggle(this);
  }

  remove(event) {
    this.todoList.remove(this);
    event.stopPropagation();
  }
}
