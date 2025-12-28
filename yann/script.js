const button = document.getElementById("btnKlik");
const pesan = document.getElementById("pesan");
const btnMau = document.getElementById("btnMau");
const btnTidak = document.getElementById("btnTidak");
const hasil = document.getElementById("hasil");

button.addEventListener("click", function () {
  button.style.display = "none";
  pesan.innerText = "mau gak jadi pacarku?";
  btnMau.style.display = "block";
  btnTidak.style.display = "block";
});

btnMau.addEventListener("click", function () {
  btnTidak.style.display = "none";
  btnMau.style.display = "none";
  hasil.innerText = "Aku senang banget dengernya 😊";
  hasil.style.opacity = 1;
});

btnTidak.addEventListener("click", function () {
  btnMau.style.display = "none";
  btnTidak.style.display = "none";
  hasil.innerText = "Tidak apa-apa, terima kasih sudah jujur.";
  hasil.style.opacity = 1;
});
