const baseUrl = "https://crudcrud.com/api/";
const apiKey = "3814a35a0d7947af84121f0768b605af";
const url = baseUrl + apiKey + "/todos";

let todos = [];

loadTodos();
function newElement() {
  var input = document.getElementsByClassName("input-list").value;
  if (input == "") {
    alert("Tidak Boleh Kosong!");
    return;
  }

  const todo = {
    title: input,
    checked: false,
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  })
    .then((response) => response.json())
    .then((todo) => {
      creatList(todo);
    });
}

// checekd
function checkTodo() {
  const id = this.dataset.id;
  if (todos != null) {
    const index = todos.findIndex((todo) => todo.id == id);
    const todo = todos[index];
    console.log(todo);

    if (todo) {
      todo.checked = !todo.checked;

      fetch(url + "/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: todo.title,
          checked: todo.checked,
        }),
      })
        .then((response) => response.json())
        .then((todo) => {
          todos[index] = todo;
        });
    }
  }
  this.classList.toggle("checked");
}

function creatList(todo) {
  const li = document.createElement("li");
  li.dataset.id = todo._id;
  li.innerText = todo.title;
  li.onclick = checkTodo;
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.onclick = closeTodo;
  span.appendChild(txt);

  if (todo.checked) {
    li.classList.toggle("checked");
  }
  li.appendChild(span);
  document.getElementById("myUL").appendChild(li);
  //   const listItem = document.createElement("div");
  //   const text = document.createElement("div");
  //   const icon = document.createElement("i");

  //   listItem.className = "list-item";
  //   text.className = "list-text";
  //   text.innerHTML = data.text;
  //   icon.className = "fas fa-trash delete-list";

  //   text.dataset.id = todo._id;
  //   text.innerText = todo.title;
  //   icon.onclick = () => deleteList(data.id);

  //   listItem.onclick = () => {
  //     if (data.finish === false) {
  //       data.finish = true;
  //       listItem.style.background = "var(--primary)";
  //       text.style.textDecoration = "line-through";
  //       icon.style.color = "white";
  //       text.style.color = "white";
  //     } else {
  //       data.finish = false;
  //       listItem.style.background = "white";
  //       text.style.textDecoration = "none";
  //       icon.style.color = "var(--primary)";
  //       text.style.color = "var(--primary)";
  //     }
  //   };
}
// hapus
function closeTodo(e) {
  e.stopPropagation();
  const id = this.parentElement.dataset.id;
  let confirmed = confirm("Apakah anda yakin iingin menghapus?");

  if (confirmed) {
    if (todos != null) {
      fetch(url + "/" + id, {
        method: "DELETE",
      }).then((response) => {
        const index = todos.findIndex((todo) => todo.id == id);
        todos.splice(index, 1);
        this.parentElement.remove();
      });
    }
  }
}

function loadTodos() {
  fetch(url).then((response) => {
    todos = response.json();
    todos.forEach((todo) => {
      creatList(todo);
    });
  });
}
