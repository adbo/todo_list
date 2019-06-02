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

  _repositoryAdd(todo) {
    this.repository.addTodo(todo);
    this.repository.saveTodos();
  }

  _repositoryRemove(todo) {
    this.repository.removeTodo(todo);
    this.repository.saveTodos();
  }

  addInput() {
    const name = document.getElementById(this.todoInput).value;
    const newTodo = new Todo(name);

    this._appendElement(newTodo);
    this._repositoryAdd(newTodo);
  }

  loadTodos() {
    const storageTodos = this.repository.loadTodos();

    if (storageTodos !== null) {
      storageTodos.map(todo => this._appendElement(todo));
    }
  }

  removeElement(todoComponent) {
    document.getElementById(this.todoTag).removeChild(todoComponent.li);
    this._repositoryRemove(todoComponent.todo);
  }

  toggle(todoComponent) {
    this._repositoryAdd(todoComponent.todo);
  }
}
