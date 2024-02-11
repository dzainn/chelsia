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

var contents = document.querySelectorAll(".pesan");
var currentIndex = 0;

// Fungsi untuk menampilkan konten selanjutnya
function showNextContent() {
  // Sembunyikan konten saat ini
  contents[currentIndex].style.display = "none";

  // Pindahkan ke konten selanjutnya
  currentIndex = (currentIndex + 1) % contents.length;

  // Tampilkan konten selanjutnya
  contents[currentIndex].style.display = "block";

  if (currentIndex === contents.length - 1) {
    document.getElementById("showNextButton").disabled = true;
  }
}

console.log(currentIndex);
// Mengaitkan fungsi dengan klik tombol
document
  .getElementById("showNextButton")
  .addEventListener("click", showNextContent);

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
