import Todo from './Todo.js';
import TodoComponent from './TodoComponent.js';

export default class TodoListComponent {
  constructor(repository, todoTag, todoInput) {
    this.repository = repository;
    this.todoTag = todoTag;
    this.todoInput = todoInput;
  }

  _appendElement(todo) {
    const todoComponent = new TodoComponent(todo, this);

    document.getElementById(this.todoTag).appendChild(todoComponent.render());
    document.getElementById(this.todoInput).value = '';
  }

  addInput() {
    const name = document.getElementById(this.todoInput).value;
    const newTodo = new Todo(name);

    this._appendElement(newTodo);
    this.repository.add(newTodo);
  }

  loadTodos() {
    const storageTodos = this.repository.load();

    if (storageTodos !== null) {
      storageTodos.map(todo => this._appendElement(todo));
    }
  }

  remove(todoComponent) {
    document.getElementById(this.todoTag).removeChild(todoComponent.li);
    this.repository.remove(todoComponent.todo);
  }

  toggle(todoComponent) {
    this.repository.add(todoComponent.todo);
  }
}
