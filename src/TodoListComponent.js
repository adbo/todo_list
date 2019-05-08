import Todo from './Todo.js';
import TodoComponent from './TodoComponent.js';

export default class TodoListComponent {
  constructor(todoList, todoTag, todoInput) {
    this.todoList = todoList;
    this.todoTag = todoTag;
    this.todoInput = todoInput;
  }

  addTodo(todo) {
    const todoComponent = new TodoComponent(todo);

    this.todoList.add(todo);
    document.getElementById(this.todoTag).appendChild(todoComponent.render());
    document.getElementById(this.todoInput).value = '';
  }

  add() {
    const name = document.getElementById(this.todoInput).value;
    const newTodo = new Todo(name);

    this.addTodo(newTodo);
    this.saveTodos();
  }

  loadTodos() {
    const storageTodos = JSON.parse(localStorage.getItem('todos'));

    if (storageTodos !== null) {
      storageTodos.map(todo => this.addTodo(todo));
    }
  }

  saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todoList.todos));
  }
}
