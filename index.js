import TodoListComponent from './src/TodoListComponent.js';
import Repository from './src/Repository.js';

const eventLoop = () => {
  const todoListTag = 'todo-list';
  const todoInputTag = 'todo-input';
  const todoAddTag = 'todo-add';

  const repository = new Repository();
  const todoListComponent = new TodoListComponent(repository, todoListTag, todoInputTag);

  todoListComponent.loadTodos();

  const keyup = (event) => {
    if (event.key !== 'Enter') {
      return false;
    }
    todoListComponent.add();
    event.preventDefault();
    return true;
  };

  document.getElementById(todoAddTag).onclick = todoListComponent.add.bind(todoListComponent);
  document.getElementById(todoInputTag).addEventListener('keyup', keyup);
};

if (document.readyState !== 'loading') {
  eventLoop();
} else {
  document.addEventListener('DOMContentLoaded', eventLoop);
}
