class Todo {
  constructor(name, done=false) {
    this.name = name;
    this.done = done;
  }
}

class TodoList {
  constructor(todos=[]) {
    this.todos = todos;
  }

  add(todo) {
    this.todos.push(todo);
  }
}

class TodoComponent {
  constructor(todo) {
    this.todo = todo;
  }

  render() {
    const li = document.createElement("li");
    const todo_text = document.createTextNode(this.todo.name);

    li.appendChild(todo_text);
    return li;
  }
}

class TodoListComponent {
  constructor(todoList, todoTag, todoInput) {
    this.todoList = todoList;
    this.todoTag = todoTag;
    this.todoInput = todoInput;
  }

  addTodo(todo) {
    const todoComponent = new TodoComponent(todo);

    todoList.add(todo);
    document.getElementById(this.todoTag).appendChild(todoComponent.render());
    document.getElementById(this.todoInput).value = "";
  }

  add() {
    const name = document.getElementById(this.todoInput).value;
    const newTodo = new Todo(name);

    this.addTodo(newTodo);
    this.saveTodos();
  }

  loadTodos() {
    const storageTodos = JSON.parse(localStorage.getItem('todos'));
    
    if(storageTodos !== null) {
      storageTodos.map(todo => this.addTodo(todo));
    }
  }

  saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todoList.todos));
  }
}

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