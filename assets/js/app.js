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

/* Udskrive array med forEach funktion */
todoArray.forEach((item) => {
  toDoContainer.innerHTML += `<p class="list-item" >${item}</p>`;
});

const listItem = document.querySelectorAll(".list-item");

listItem.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.target.classList.toggle("done");
  });
});
