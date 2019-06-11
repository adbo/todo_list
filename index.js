import TodoListComponent from './src/TodoListComponent.js';
import Repository from './src/Repository.js';

const eventLoop = () => {
  const todoListTag = 'todo-list';
  const todoInputTag = 'todo-input';
  const todoAddTag = 'todo-add';

  const todoAddElement = document.getElementById(todoAddTag);
  const todoInputElement = document.getElementById(todoInputTag);

  const repository = new Repository();
  const todoListComponent = new TodoListComponent(repository, todoListTag, todoInputTag);

  todoListComponent.loadTodos();

  const keyup = event => {
    if (event.key !== 'Enter') {
      return false;
    }
    todoListComponent.addInput();
    event.preventDefault();
    return true;
  };

  todoAddElement.onclick = () => {
    if(todoAddElement.classList.contains('add-active')) {
      todoInputElement.classList.remove('input-active');
      todoAddElement.classList.add('add-animate-undo');
    } else {
      todoAddElement.classList.add('add-animate');
    }
  }

  todoAddElement.addEventListener('animationend', () => {
    if(todoAddElement.classList.contains('add-active')) {
      todoAddElement.classList.remove('add-active');
      todoAddElement.classList.remove('add-animate-undo');
    } else {
      todoInputElement.classList.add('input-active');
      todoAddElement.classList.replace('add-animate', 'add-active');
      todoInputElement.focus();
    }
  });

  todoInputElement.addEventListener('keyup', keyup);
};

if (document.readyState !== 'loading') {
  eventLoop();
} else {
  document.addEventListener('DOMContentLoaded', eventLoop);
}
