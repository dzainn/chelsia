let outputDiv = document.getElementById("output");
let pesan = document.getElementById("pesan");
let hilangkanTombol = document.getElementById("main");
let audio = document.getElementById("audio-player");

// function getUserInput() {
//   let userInput = document.getElementById("userInput").value;

//   if (userInput !== "") {
//     // Menampilkan konten yang sebelumnya disembunyikan
//     displayUserInput(userInput);

//     // Memperbarui konten dengan nama yang dimasukkan pengguna
//     document.getElementById("name-display").textContent = name;
//   } else {
//     // Jika input kosong, tampilkan pesan kesalahan atau lakukan tindakan lain sesuai kebutuhan
//     alert("Mohon isi nama Anda sebelum melanjutkan.");
//   }
// }

// function displayNext() {
//   audio.play();
//   hilangkanTombol.style.display = "none";
//   // outputDiv.textContent = `Halo ${input} apa kabar?`;
//   pesan.classList.remove = "hilangkan";
//   pesan.className = "tampilkan";
// }

// Tombol
var contents = document.querySelectorAll(".pesan");
var currentIndex = 0;

// Tombol
var prevButton = document.getElementById("prevButton");
var nextButton = document.getElementById("nextButton");

// Fungsi untuk menampilkan konten selanjutnya
function showNextContent() {
  audio.play();
  // Sembunyikan konten saat ini
  contents[currentIndex].style.display = "none";

  // Pindahkan ke konten selanjutnya jika bukan konten terakhir
  if (currentIndex < contents.length - 1) {
    currentIndex++;
    // Tampilkan konten selanjutnya
    contents[currentIndex].style.display = "block";
  }

  // Menampilkan tombol kembali jika bukan konten pertama
  if (currentIndex > 0) {
    prevButton.style.display = "block";
  }

  // Menyembunyikan tombol selanjutnya jika mencapai konten terakhir
  if (currentIndex === contents.length - 1) {
    nextButton.style.display = "none";
  }
}

// Fungsi untuk menampilkan konten sebelumnya
function showPreviousContent() {
  // Sembunyikan konten saat ini
  contents[currentIndex].style.display = "none";

  // Pindahkan ke konten sebelumnya jika bukan konten pertama
  if (currentIndex > 0) {
    currentIndex--;
    // Tampilkan konten sebelumnya
    contents[currentIndex].style.display = "block";
  }

  // Menampilkan tombol selanjutnya
  nextButton.style.display = "block";

  // Menyembunyikan tombol kembali jika mencapai konten pertama
  if (currentIndex === 0) {
    prevButton.style.display = "none";
  }
}

// Mengaitkan fungsi dengan klik tombol
nextButton.addEventListener("click", showNextContent);
prevButton.addEventListener("click", showPreviousContent);

const audioPlayer = document.getElementById("audio-player");
const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const muteBtn = document.getElementById("mute-btn");
const volumeSlider = document.getElementById("volume-slider");
const progressSlider = document.getElementById("progress-slider");
const durationDisplay = document.getElementById("duration");

playBtn.addEventListener("click", () => {
  audioPlayer.play();
});

pauseBtn.addEventListener("click", () => {
  audioPlayer.pause();
});

muteBtn.addEventListener("click", () => {
  if (audioPlayer.muted) {
    audioPlayer.muted = false;
    muteBtn.textContent = "Mute";
  } else {
    audioPlayer.muted = true;
    muteBtn.textContent = "Unmute";
  }
});

volumeSlider.addEventListener("input", () => {
  audioPlayer.volume = volumeSlider.value / 100;
});

audioPlayer.addEventListener("timeupdate", () => {
  const duration = formatTime(audioPlayer.duration);
  const currentTime = formatTime(audioPlayer.currentTime);
  durationDisplay.textContent = `${currentTime} / ${duration}`;
  progressSlider.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
});

progressSlider.addEventListener("input", () => {
  audioPlayer.currentTime = (progressSlider.value / 100) * audioPlayer.duration;
});

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${padZero(minutes)}:${padZero(seconds)}`;
}

function padZero(number) {
  return (number < 10 ? "0" : "") + number;
}
