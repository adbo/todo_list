import TodoListComponent from './src/TodoListComponent.js';
import Repository from './src/Repository.js';

function eventLoop() {
  const repository = new Repository();
  const todoListComponent = new TodoListComponent(repository, 'todo_list', 'todo_input');

  todoListComponent.loadTodos();

  const keyup = (event) => {
    if (event.key !== 'Enter') {
      return false;
    }
    todoListComponent.add();
    event.preventDefault();
    return true;
  };

  document.getElementById('todo_add').onclick = todoListComponent.add.bind(todoListComponent);
  document.getElementById('todo_input').addEventListener('keyup', event => keyup(event));
}

if (document.readyState !== 'loading') {
  eventLoop();
} else {
  document.addEventListener('DOMContentLoaded', eventLoop);
}
