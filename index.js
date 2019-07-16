import TodoListComponent from './src/TodoListComponent.js';
import Repository from './src/Repository.js';

const eventLoop = () => {
  const todoListTag = 'todo-list';
  const todoInputTag = 'todo-input';
  const todoAddTag = 'todo-add';
  const addActiveClass = 'add-active';
  const inputActiveClass = 'input-active';
  const addAnimateUndoClass = 'add-animate-undo';
  const addAnimateClass = 'add-animate';

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
    if(todoAddElement.classList.contains(addActiveClass)) {
      todoInputElement.classList.remove(inputActiveClass);
      todoAddElement.classList.add(addAnimateUndoClass);
    } else {
      todoAddElement.classList.add(addAnimateClass);
    }
  }

  todoAddElement.addEventListener('animationend', () => {
    if(todoAddElement.classList.contains(addActiveClass)) {
      todoAddElement.classList.remove(addActiveClass);
      todoAddElement.classList.remove(addAnimateUndoClass);
    } else {
      todoInputElement.classList.add(inputActiveClass);
      todoAddElement.classList.replace(addAnimateClass, addActiveClass);
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
