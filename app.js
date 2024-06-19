//completedButton.innerHTML = '<i class="fas fa-check"></i>';
//trashButton.innerHTML = '<i class="fas fa-trash"></i>';
//Selectors
const input = document.querySelector(".input");
const button = document.querySelector(".first-button");
const todoContainer = document.querySelector(".todo-container");
//EventListeners
button.addEventListener("click", addItem);

//Functions
function addItem(event) {
  event.preventDefault();
  if (input.value === "") {
    return;
  }
  const item = document.createElement("div");
  item.classList.add("item");
  todoContainer.appendChild(item);
  const p = document.createElement("p");
  p.classList.add("p");
  p.textContent = input.value;
  item.appendChild(p);
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  item.appendChild(completedButton);
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  item.appendChild(trashButton);
  trashButton.addEventListener("click", removeItem);
  function removeItem() {
    item.remove();
  }
  completedButton.addEventListener("click", addStyle);
  function addStyle() {
    p.classList.add("style");
  }
}
