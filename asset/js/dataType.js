// tipe data number
let n = 25;
n = 30;

// infinity, -infinity dan NaN.
let inf = 100 / 0;
console.log(inf);
// atau
console.log(Infinity);

console.log("Arkatama" + 1);
console.log("Multi Solusindo" + 2 * 5);
console.log(Nan * 3);

// tipe data BigInt
// Sebuah nilai yang bertipe BigInt selalu diakhiri dengan huruf n pada akhir sebyuah nilai integer.
const biInt = 12345678901234567890n;

// tipe Data String
console.log("Arkatama");
console.log("Arkatama");
console.log(`Arkatama`);

// tipe data boolean
let isLoggedin = true;
let isAdmin = false;

let isGreater = 10 > 5;
let isLess = 10 < 5;

// tipe data null
let girlFriend = null;

// tipe data undifined
let name;
console.log(`name`);

// tipe data symbol
let employee = Symbol("Joko");
console.log(employee);
console.log(employee.description);

// tipe data object
// Tipe data khusus yang terdiri dari pasangan kunci dan nilai (key-value pair).
let employe = {
  nama: "Ade",
  age: 21,
  job: "Mahasiswa",
  isMarried: false,
  hobies: ["Badminton", "Pencak Silat"],
};

console.log(`His name is ${employe.nama} and he is ${employe.age} years old.`);
