const inputUser = document.getElementById("input-user");
const listGroup = document.getElementById("list-group");
const form = document.querySelector("form");
let list_item = [];

// Local Storage
if (localStorage.getItem("TO DO ITEMS")) {
  const itemLocalStorage = JSON.parse(localStorage.getItem("TO DO ITEMS"));
  itemLocalStorage.forEach(function (itemTodo) {
    listGroup.innerHTML += `
          <li id="main-text" onclick="clicked" class="list-group-item d-flex justify-content-between align-items-center">
            <h4 id="main-text" onclick="clicked">${itemTodo}</h4>
            <span class="fs-4 text-primary d-flex gap-2"><i class="bi bi-check-square-fill"></i><i class="bi bi-x-square-fill" id="remove"></i></span>
          </li>`;

    list_item.push(itemTodo);
  });
}

function manageLocalStorage(action, item) {
  switch (action) {
    case "TAMBAH":
      list_item.push(item);
      break;
    case "HAPUS":
      list_item = list_item.filter(function (todoItem) {
        return todoItem != item;
      });
      break;
  }

  localStorage.setItem("TO DO ITEMS", JSON.stringify(list_item));
}

// To do List
form.addEventListener("submit", function (event) {
  listGroup.innerHTML += `
          <li id="main-text" onclick="clicked" class="list-group-item d-flex justify-content-between align-items-center">
            <h4 id="main-text" onclick="clicked">${inputUser.value}</h4>
            <span class="fs-4 text-primary d-flex gap-2"><i class="bi bi-check-square-fill mr-10"></i><i class="bi bi-x-square-fill" id="remove"></i></span>
          </li>`;

  // Menambahkan item baru ke local storage
  manageLocalStorage("TAMBAH", inputUser.value);

  inputUser.value = "";
  event.preventDefault();
});

listGroup.addEventListener("click", function (event) {
  if (event.target.id == "remove") {
    event.target.parentElement.parentElement.remove();
    manageLocalStorage(
      "HAPUS",
      event.target.parentElement.parentElement.textContent.trim()
    );
  }
});
