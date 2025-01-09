const root = document.querySelector("#root");

const mainHeading = document.createElement("h1");
mainHeading.innerText = "To-Do List";
mainHeading.classList.add("main-heading");
root.appendChild(mainHeading);

const inputContainer = document.createElement("div");
inputContainer.classList.add("input-container");
root.appendChild(inputContainer);

const todoInput = document.createElement("input");
todoInput.type = "text";
todoInput.placeholder = "Add Your To-Do";
todoInput.classList.add("todo-input");
inputContainer.appendChild(todoInput);

const addTodoBtn = document.createElement("button");
addTodoBtn.innerText = "Add To-Do";
addTodoBtn.classList.add("add-todo-btn");
inputContainer.appendChild(addTodoBtn);

// Track which todo is being edited
let editingTodo = null;

function todos() {
  const todoListContainer = document.createElement("div");
  todoListContainer.classList.add("todo-list-container");

  const check = document.createElement("input");
  check.type = "checkbox";
  check.classList.add("check");
  todoListContainer.appendChild(check);

  const todoName = document.createElement("p");
  todoName.classList.add("todo-name");
  todoName.innerText = todoInput.value;
  todoListContainer.appendChild(todoName);

  const editTodo = document.createElement("span");
  editTodo.innerHTML = "<i class='fa-solid fa-pen'></i>";
  editTodo.classList.add("edit-delete");
  todoListContainer.appendChild(editTodo);

  check.addEventListener("change", () => {
    if (check.checked) {
      todoName.classList.add("strike-text");
    } else {
      todoName.classList.remove("strike-text");
    }
  });

  editTodo.addEventListener("click", () => {
    todoInput.value = todoName.innerText;
    editingTodo = todoName; // Store reference to the todo being edited
  });

  root.appendChild(todoListContainer);
}

addTodoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (todoInput.value.trim() !== "") {
    if (editingTodo) {
      // Update existing todo
      editingTodo.innerText = todoInput.value;
      editingTodo = null; // Reset editing state
    } else {
      todos();
    }

    todoInput.value = "";
  }
});
