import TodoListComponent from './src/TodoListComponent.js';
import Repository from './src/Repository.js';

function eventLoop() {
  const repository = new Repository();
  const todoListComponent = new TodoListComponent(repository, 'todo-list', 'todo-input');

  todoListComponent.loadTodos();

  const keyup = (event) => {
    if (event.key !== 'Enter') {
      return false;
    }
    todoListComponent.add();
    event.preventDefault();
    return true;
  };

  document.getElementById('todo-add').onclick = todoListComponent.add.bind(todoListComponent);
  document.getElementById('todo-input').addEventListener('keyup', event => keyup(event));
}

if (document.readyState !== 'loading') {
  eventLoop();
} else {
  document.addEventListener('DOMContentLoaded', eventLoop);
}
