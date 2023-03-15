//  kondisi if
let response = prompt("1+1=");
if (response == 2) {
  alert("Jawaban Benar");
}

// kondisi if - else
let resp = prompt("1+1=");
if (resp == 2) {
  alert("Jawaban Benar");
} else {
  alert("Jawaban Salah");
}

// kondisi else if
let respon = prompt("1+1=");
if (respon == 2) {
  alert("Jawaban Benar");
} else if (respon < 2) {
  alert("terlalu rendah!");
} else {
  alert("terlalu tinggi!");
}

// kondisi switch
let color = "red";

switch (color) {
  case "red":
    alert("I Love Red!");
    break;
  case "blue":
    alert("I Love blue!");
    break;
  default:
    alert("I dont know what color it is!");
    break;
}
