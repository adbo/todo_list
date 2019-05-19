import Todo from './Todo.js';
import TodoComponent from './TodoComponent.js';

export default class TodoListComponent {
  constructor(repository, todoTag, todoInput) {
    this.repository = repository;
    this.todoTag = todoTag;
    this.todoInput = todoInput;
  }

  addTodo(todo) {
    const todoComponent = new TodoComponent(todo);

    document.getElementById(this.todoTag).appendChild(todoComponent.render());
    document.getElementById(this.todoInput).value = '';
  }

  add() {
    const name = document.getElementById(this.todoInput).value;
    const newTodo = new Todo(name);

    this.addTodo(newTodo);
    this.repository.addTodo(todo);
    this.repository.saveTodos();
  }

  loadTodos() {
    const storageTodos = this.repository.loadTodos();

    if (storageTodos !== null) {
      storageTodos.map(todo => this.addTodo(todo));
    }
  }
}
