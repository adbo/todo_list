import TodoList from './src/TodoList.js';
import TodoListComponent from './src/TodoListComponent.js';

function eventLoop () {
  const todoList = new TodoList();
  const todoListComponent = new TodoListComponent(todoList, "todo_list", "todo_input");

  todoListComponent.loadTodos();

  const keyup = event => {
    if(event.key !== "Enter") 
      return false;
    todoListComponent.add();
    event.preventDefault();
  }

  document.getElementById("todo_add").onclick = todoListComponent.add;
  document.getElementById("todo_input").addEventListener("keyup", event => keyup(event));
}

if (document.readyState !== 'loading') {
  eventLoop();
} else {
  document.addEventListener( 'DOMContentLoaded', eventLoop );
}
