const dasar = document.querySelector(".week1");
const lanjutan = document.querySelector(".week2");
const javaScript = document.querySelector(".week4");
const hiden = document.querySelector(".hiden");
const hiden2 = document.querySelector(".hiden2");
const all = document.querySelector(".all-bab");
const bab1 = document.querySelector(".bab1");
const jScript = document.querySelector(".jScript");

dasar.addEventListener("click", function () {
  all.style.display = "none";
  bab1.classList.remove("hiden");
});

lanjutan.addEventListener("click", function () {
  bab1.classList.add("hiden");
  all.style.display = "flex";
});

// javaScript.addEventListener("click", function () {
//   all.style.display = "none";
//   jScript.classList.remove("hiden2");
// });
