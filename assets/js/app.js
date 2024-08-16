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
    <button class="btn-delete"><i class="fa-solid fa-xmark"></i></button>
    </section>
    `;
  });

  /* Kalder funktion for at tilføje event listeners hvilket gør at 
  redigerings funktion forneden er aktiv */
  attachEventListeners();
}

/*  */
renderToDoList();

/* funktion  */
function attachEventListeners() {
  const listItem = document.querySelectorAll(".list-item");

  /* checkbox og check-icon variabler */
  const checkIcon = document.querySelectorAll(".fa-check");
  const checkbox = document.querySelectorAll(".checkbox");

  /* Edit og delete variabler */
  const btnDelete = document.querySelectorAll(".btn-delete");
  const btnEdit = document.querySelector(".btn-edit");

  /* Tjek af på listen */
  listItem.forEach((item, index) => {
    item.addEventListener("click", (event) => {
      event.target.classList.toggle("done");
      checkIcon[index].classList.toggle("active");
    });
  });

  /* Edit og delete variabler */
  btnEdit.addEventListener("click", () => {
    checkbox.forEach((box) => {
      box.classList.toggle("active");
    });
    btnDelete.forEach((btn) => {
      btn.classList.toggle("active");
    });
  });

  /* Slette items fra list ved at klikke på btnDelete  */
  btnDelete.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      todoArray.splice(index, 1);
      /* Genetabler listen efter sletning */
      renderToDoList();
    });
  });
}

/* Tilføj nyt punkt på listen */
const input = document.querySelector(".input");
const btnAddItem = document.querySelector(".btn-add-item");

btnAddItem.addEventListener("click", () => {
  const newItem = input.value;

  if (newItem.trim() !== "") {
    /* trim() !== "" sikre at input ikke er tomt */
    todoArray.push(newItem);
    input.value = ""; /* Tømmer inputfelt efter tilføjelse */
    renderToDoList();
  }
});
