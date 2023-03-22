// URI: alamat web/ alamat lokasi file
// base url -> alamat web
// endpoint -> alamat lokasi file/ resource/ data

const baseUrl = "https://crudcrud.com/api/";

// api key silahkan diganti sendiri
const apiKey = "14bddc9680c94546ba17d1acfae4abf7";
const url = baseUrl + apiKey;
const endpointMahasiswa = `${url}/mahasiswa`;
const endpointDosen = `${url}/dosen`;

const handleError = (error) => console.log(error);
const handleSuccess = (result) => console.log(result);

// GET semua data
const getMahasiswa = () => {
  fetch(endpointMahasiswa).then(handleSuccess).catch(handleError);
};

// GET detail data
const detailMahasiswa = (id) => {
  fetch(`${endpointMahasiswa}/${id}`).then(handleSuccess).catch(handleError);
};

// POST data/ menambah data
const postMahasiswa = (mahasiswa) => {
  fetch(endpointMahasiswa, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(mahasiswa),
  })
    .then(handleSuccess)
    .catch(handleError);
};

// DELETE data
const deleteMahasiswa = (id) => {
  fetch(`${endpointMahasiswa}/${id}`, {
    method: "DELETE",
  })
    .then(handleSuccess)
    .catch(handleError);
};

// PUT data/ update data
const updateMahasiswa = (id, mahasiswa) => {
  fetch(`${endpointMahasiswa}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(mahasiswa),
  })
    .then(handleSuccess)
    .catch(handleError);
};

// async
getMahasiswa();
deleteMahasiswa("6418143b22534003e8c8ea63");
getMahasiswa();

// const mahasiswa = {
//   nim: "1234567890",
//   nama: "Ari",
//   alamat: "Jl. Jalan",
// };

// const mahasiswa2 = {
//   nim: "23424234",
//   nama: "Putra",
//   alamat: "Jl. Bareng",
// };

// postMahasiswa(mahasiswa);
// postMahasiswa(mahasiswa2);

// const mahasiswaEdit = {
//   nim: "252525",
//   nama: "Rizqi",
//   alamat: "Jl. Kenangan",
// };
// updateMahasiswa("6418143b22534003e8c8ea62", mahasiswaEdit);
detailMahasiswa("6418143b22534003e8c8ea62");

// TO DO

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

  storeData.forEach((data) => {
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
  storeData = JSON.parse(localStorage.getItem(KEY));
}

getData();
render();
