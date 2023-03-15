// deklarasi score

function play() {
  let playerScore = 0;
  alert("Mari Bermain Batu, Gunting, Kertas");
  let name = prompt("Masukkan Nama Kamu: ");
  if (name === "") {
    alert("Nama Tidak Boleh kosong");
  } else {
    alert("Halo " + name);
    alert("Selamat Bermain " + name);

    // For
    let game;
    let ulang = prompt("Anda ingin bermain berapa kali ?");
    for (game = 0; game < ulang; game++) {
      let userChoice = prompt("Masukkan pilihanmu \nbatu, gunting atau kertas");

      // Bot
      let computer;
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      switch (computerChoice) {
        case 1:
          computer = "gunting";
          break;

        case 2:
          computer = "kertas";
          break;

        case 3:
          computer = "batu";
          break;
      }

      let hasil;

      if (userChoice === computer) {
        hasil = "Seri! Yuk coba lagi";
      } else if (
        (userChoice === "kertas" && computer === "batu") ||
        (userChoice === "batu" && computer === "gunting") ||
        (userChoice === "gunting" && computer === "kertas")
      ) {
        hasil = "Anda menang!";
        playerScore++;
      } else {
        hasil = "Anda kalah! Semangat!!";
        playerScore--;
      }

      console.log(`Halo ${name}`);
      console.log(`Anda memilih ${userChoice}`);
      console.log(`komputer memilih ${computer}`);
      console.log(`${hasil}`);
      console.log(`Score Anda ${playerScore}`);
      console.log("============================");
    }
  }

  // game mulai
}
play();
