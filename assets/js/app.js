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

todoArray.forEach((item) => {
  toDoContainer.innerHTML += `<p>${item}</p>`;
});
