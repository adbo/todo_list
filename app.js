const add = () => {
  const todo_input = document.getElementById("todo_input").value;
  const li = document.createElement("li");
  const todo_text = document.createTextNode(todo_input);
  
  li.appendChild(todo_text);
  document.getElementById("todo_list").appendChild(li);
  document.getElementById("todo_input").value = "";
}

const keyup = event => {
  if(event.key !== "Enter") 
    return false;
  add();
  event.preventDefault();
}

document.getElementById("todo_add").onclick = add;
document.getElementById("todo_input").addEventListener("keyup", event => keyup(event));