/*To Do Liste*/

/* Variabler */
const toDoContainer = document.querySelector(".todo-container");

/* Array med list items - opgaver på to-do listen */
let todoArray = [
  "Gå tur med hunden",
  "Tømme opvaskeren",
  "Slå græs",
  "Støvsuge",
];

/* Udskrive to do liste (array) i browseren */
function renderToDoList() {
  /* nulstiller array så den ikke tilføjer dem hver gang man "pusher" btn */
  toDoContainer.innerHTML = "";

  todoArray.forEach((item) => {
    toDoContainer.innerHTML += `<p class="list-item" >${item}</p>`;
  });
}
/*  */
renderToDoList();

/* Tjek af på listen */
const listItem = document.querySelectorAll(".list-item");

listItem.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.target.classList.toggle("done");
  });
});

/* Tilføj nyt punkt på listen */
const input = document.querySelector(".input");
const btnAddItem = document.querySelector(".btn-add-item");

btnAddItem.addEventListener("click", () => {
  const newItem = input.value;

  todoArray.push(newItem);
  renderToDoList();
});
