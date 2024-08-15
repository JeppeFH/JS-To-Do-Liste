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
    toDoContainer.innerHTML += `
    <section class="list-item-flex">
    <p class="list-item" >${item} </p>
    <div class="checkbox"><i class="fa-solid fa-check"></i></div>
    </section>
    `;
  });
}
/*  */
renderToDoList();

/* Tjek af på listen */
const listItem = document.querySelectorAll(".list-item");
const checkIcon = document.querySelectorAll(".fa-check");
const checkbox = document.querySelectorAll(".checkbox");

listItem.forEach((item, index) => {
  item.addEventListener("click", (event) => {
    event.target.classList.toggle("done");
    checkIcon[index].classList.toggle("active");
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
