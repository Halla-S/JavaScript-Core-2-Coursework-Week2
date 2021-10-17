let list = document.getElementById("todo-list");
list.innerHTML = "";
function populateTodoList(todos) {
  todos.forEach((element) => {
    // let li = document.createElement("li");
    list.innerHTML =
      list.innerHTML +
      '<li class="list-group-item d-flex justify-content-between align-items-center">' +
      element.task +
      '<span class="badge bg-primary rounded-pill"><i class="fa fa-check" aria-hidden="true"></i><i class="fa fa-trash" aria-hidden="true"></i></span></li>';
  });

  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

const deleteBTns = document.querySelectorAll(".fa.fa-trash");

function deleteAllCompletedTodos() {
  deleteBTns.forEach((deleteBTn) => {
    deleteBTn.addEventListener("click", deleteTodo);
    function deleteTodo(e) {
      let span1 = e.target.parentElement;
      let listItem = span1.parentElement;
      if (listItem.style.textDecoration === "line-through") {
        listItem.parentElement.removeChild(listItem);
      }
    }
  });
}
function check() {
  const completeBTns = document.querySelectorAll(".fa.fa-check");
  completeBTns.forEach((completeBTn) => {
    completeBTn.addEventListener("click", done);
    function done(e) {
      let text = e.target.parentElement;
      if (text.parentElement.style.textDecoration === "line-through") {
        text.parentElement.style.textDecoration = "none";
      } else {
        text.parentElement.style.textDecoration = "line-through";
      }
    }
  });
  deleteAllCompletedTodos();
}

check();
let myForm = document.forms[0];
myForm.addEventListener("submit", addNewTodo);
let inputItem = document.getElementById("todoInput");

function addNewTodo(event) {
  event.preventDefault();
  var newTask = inputItem.value.trim();
  const todoItem = { task: newTask, completed: false };

  list.innerHTML =
    list.innerHTML +
    '<li class="list-group-item d-flex justify-content-between align-items-center">' +
    todoItem.task +
    '<span class="badge bg-primary rounded-pill"><i class="fa fa-check" aria-hidden="true"></i><i class="fa fa-trash" aria-hidden="true"></i></span></li>';
  inputItem.value = "";
  check();
}

const ListFirst = document.querySelector(
  "li:first-child .badge.bg-primary.rounded-pill "
);
ListFirst.classList.add("class1");
ListFirst.setAttribute("id", "newId");
let ListElem = document.querySelector("li:first-child");
