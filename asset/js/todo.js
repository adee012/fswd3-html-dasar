const taskNotification = document.querySelector("[task-notification]");
const finishNotification = document.querySelector("[finish-notification]");
const listContainer = document.querySelector("[list-container]");
const input = document.querySelector("[input-list]");
const inputSubmit = document.querySelector("[input-submit]");

const KEY = "Todo List";
let storeData = [];

inputSubmit.addEventListener("click", () => {
  storeData.push({
    id: Date.now(),
    text: input.value,
    finish: false,
  });
  saveData();
  input.value = "";
  render();
});

function render() {
  removeListElement();

  let task = 0;
  let finish = 0;

  storeData.map((data) => {
    data.finish ? finish++ : task++;

    const listItem = document.createElement("div");
    const text = document.createElement("div");
    const icon = document.createElement("i");

    icon.onclick = () => deleteList(data.id);

    listItem.className = "list-item";
    text.className = "list-text";
    text.innerHTML = data.text;
    icon.className = "fas fa-trash delete-list";

    if (data.finish) {
      listItem.style.background = "var(--primary)";
      text.style.textDecoration = "line-through";
      icon.style.color = "white";
      text.style.color = "white";
    }

    listItem.appendChild(text);
    listItem.appendChild(icon);
    listContainer.appendChild(listItem);

    listItem.onclick = () => {
      if (data.finish === false) {
        data.finish = true;
        listItem.style.background = "var(--primary)";
        text.style.textDecoration = "line-through";
        icon.style.color = "white";
        text.style.color = "white";
      } else {
        data.finish = false;
        listItem.style.background = "white";
        text.style.textDecoration = "none";
        icon.style.color = "var(--primary)";
        text.style.color = "var(--primary)";
      }
      saveData();
    };
  });

  finishNotification.innerHTML = `finish ${finish}`;
  taskNotification.innerHTML = `todos ${task}`;
}

function removeListElement() {
  while (listContainer.hasChildNodes()) {
    listContainer.removeChild(listContainer.firstChild);
  }
}

// delete Data
function deleteList(id) {
  storeData = storeData.filter((data) => data.id !== id);
  saveData();
  render();
}

// save data localStorage
function saveData() {
  localStorage.setItem(KEY, JSON.stringify(storeData));
  getData();
  render();
}

// ambil data dari localStorage
function getData() {
  const bro = JSON.parse(localStorage.getItem(KEY));
  return bro;
}

getData();
render();
