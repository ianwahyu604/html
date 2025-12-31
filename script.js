const button = document.getElementById("btnKlik");
const pesan = document.getElementById("pesan");
const btnMau = document.getElementById("btnMau");
const btnTidak = document.getElementById("btnTidak");
const hasil = document.getElementById("hasil");
const btnHitung = document.getElementById("btnHitung");
const bulanKenal = document.getElementById("bulanKenal");
const hasilHitung = document.getElementById("hasilHitung");
const awal = document.getElementById("awal");
const calculator = document.getElementById("calculator");
const box = document.getElementById("box");
const note = document.getElementById("note");
const lanjutkan = document.getElementById("lanjutkan");
const h1 = document.getElementById("h1");
const newYear = document.getElementById("newyear");
const nyText = document.getElementById("ny-text");
let confettiPlayed = false;
const pesanTahunBaru =
  "Terima kasih sudah bilang iya.\n" +
  "Semoga tahun ini lebih baik dari kemarin, \n" +
  "dan semoga kamu sehat selalu. 💖\n\n" +
  "🎆 Selamat Tahun Baru 🎆";
const confettiContainer = document.getElementById("confetti");
const memory = document.getElementById("memory");
const memoryText = document.getElementById("memory-text");

function launchConfetti() {
  const colors = ["#ffb3c6", "#ffc8dd", "#cdb4db", "#bde0fe", "#a2d2ff"];

  for (let i = 0; i < 50; i++) {
    const piece = document.createElement("div");
    piece.classList.add("confetti-piece");

    piece.style.left = Math.random() * 100 + "vw";
    piece.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = Math.random() * 0.5 + "s";
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;

    confettiContainer.appendChild(piece);

    setTimeout(() => piece.remove(), 3000);
  }
}

function typeWriter(text, element, speed = 60) {
  element.innerHTML = "";
  let i = 0;

  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }

  typing();
}

btnHitung.addEventListener("click", function () {
  const bulanAwal = parseInt(bulanKenal.value);
  const bulanSekarang = new Date().getMonth() + 1;

  if (isNaN(bulanAwal)) {
    hasilHitung.innerText = "Isi bulannya dulu ya.";
    hasilHitung.style.opacity = 1;
    return;
  }

  if (bulanAwal > bulanSekarang) {
    hasilHitung.innerText =
      "Bulannya tidak boleh melebihi bulan sekarang ya 🙂";
    hasilHitung.style.opacity = 1;
    return;
  }

  const selisih = bulanSekarang - bulanAwal;

  hasilHitung.innerText =
    "Sudah " +
    selisih +
    " bulan sejak pertama kali kita kenal. " +
    "Terima kasih sudah jadi bagian dari waktu itu.";

  hasilHitung.style.opacity = 1;
});

button.addEventListener("click", function () {
  awal.style.display = "block";
  note.style.display = "block";
  button.style.display = "none";
  pesan.innerText = "mau gak jadi pacarku?";
  btnMau.style.display = "block";
  btnTidak.style.display = "block";
});

btnMau.addEventListener("click", function () {
  h1.style.display = "none";
  pesan.style.display = "none";
  awal.style.display = "none";
  note.style.display = "none";
  btnTidak.style.display = "none";
  btnMau.style.display = "none";

  hasil.innerText = "Aku senang banget dengernya 😊\n🥰 i love u 🥰";
  hasil.style.opacity = 1;
  lanjutkan.style.display = "block";
});

btnTidak.addEventListener("click", function () {
  h1.style.display = "none ";
  pesan.style.display = "none";
  awal.style.display = "none";
  note.style.display = "none";
  btnMau.style.display = "none";
  btnTidak.style.display = "none";
  hasil.innerText =
    "terima kasih sudah jujur. cantik😄 \n\n btw selamat tahun baru ya";
  hasil.style.opacity = 1;
  lanjutkan.style.display = "none";
});

lanjutkan.addEventListener("click", function () {
  if (!confettiPlayed) {
    launchConfetti();
    confettiPlayed = true;
  }

  calculator.style.display = "none";
  lanjutkan.style.display = "none";
  hasil.style.display = "none";
  box.style.display = "none";

  newYear.style.display = "block";
  newYear.classList.add("fade-in");

  typeWriter(pesanTahunBaru, nyText, 50);

  setTimeout(() => {
    memory.style.display = "block";
    memoryText.innerText =
      "aku mau ngungkapin ini dari lama,\n" +
      "tapi ya gitu aku selalu overthinking,\n" +
      "sekarang aku beranikan diri ungkapin,\n " +
      "masalah mau ngak itu hakmu.\n" +
      "💕terimakasih :)💕";
  }, 8000);
});

const buddy = document.getElementById("buddy");
const face = document.getElementById("face");

let idleTimer;

function setIdle() {
  face.textContent = "😐";
  face.classList.add("bored");
  showBubble("kak pencet aku 😐");
}

function resetIdle() {
  clearTimeout(idleTimer);
  face.classList.remove("bored");
  face.textContent = "😊";

  idleTimer = setTimeout(setIdle, 4000);
}

buddy.addEventListener("click", () => {
  face.textContent = "😆";
  face.classList.add("jump");
  showBubble("hehe 😆");

  setTimeout(() => {
    face.classList.remove("jump");
    resetIdle();
  }, 1000);
});

// start idle timer pertama kali
resetIdle();

const bubble = document.getElementById("bubble");

function showBubble(text) {
  bubble.textContent = text;
  bubble.classList.add("show");

  setTimeout(() => {
    bubble.classList.remove("show");
  }, 1500);
}
