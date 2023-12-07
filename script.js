const music = document.getElementById("music");
const toggleButton = document.getElementById("toggle-button");

// fullscreen intro and play music
function toggleOpen() {
  let open = document.getElementById("intro");
  open.classList.toggle("open");
  setTimeout(function () {
    music.play();
  }, 1000);
  toggleButton.src = "assets/icon/pause-circle.svg";
  toggleButton.alt = "Pause Music";
}

// toggle music
function playmusic() {
  if (music.paused) {
    music.play();
    toggleButton.src = "assets/icon/pause-circle.svg";
    toggleButton.alt = "Pause Music";
  } else {
    music.pause();
    toggleButton.src = "assets/icon/play-circle.svg";
    toggleButton.alt = "Play Music";
  }
}

toggleButton.addEventListener("click", playmusic);

// Set tanggal berakhir
var countDownDate = new Date("2024-01-12T00:00:00Z").getTime();

// Update the countdown every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the countdown date
  var distance = countDownDate - now;

  // Calculate the days, hours, minutes and seconds remaining
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="countdown"
  document.getElementById("countdown-hari").innerHTML = days;
  document.getElementById("countdown-jam").innerHTML = hours;
  document.getElementById("countdown-menit").innerHTML = minutes;
  document.getElementById("countdown-detik").innerHTML = seconds;

  // If the countdown is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  // Jika posisi scroll lebih besar dari 100 piksel, ubah warna latar belakang navbar
  if (window.scrollY > 99) {
    navbar.classList.add("gradient-background");
    navbar.style.transition = "100ms"; // Ubah warna sesuai keinginan Anda
  } else {
    navbar.classList.remove("gradient-background");
  }
});

window.addEventListener("load", function () {
  const form = document.getElementById("my-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      Swal.fire({
        icon: "success",
        title: "Good!",
        text: "Kehadiran berhasil dikirim",
      });
    });
  });
});

// salin ke papan klip
function myFunction1() {
  const copyText = document.getElementById("myInput1");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  const tooltip = document.getElementById("copied1");
  tooltip.innerHTML = "Telah tersalin";
}

function outFunc1() {
  const tooltip = document.getElementById("copied1");
  tooltip.innerHTML = "Salin no rekening";
}

function myFunction2() {
  const copyText = document.getElementById("myInput2");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  const tooltip = document.getElementById("copied2");
  tooltip.innerHTML = "Telah tersalin";
}

function outFunc2() {
  const tooltip = document.getElementById("copied2");
  tooltip.innerHTML = "Salin no rekening";
}

// url
const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get("n") || "";
const pronoun = urlParams.get("p") || "Bapak/Ibu/Saudara/i";

const namaContainer = document.querySelector("#text");
namaContainer.innerHTML = `${pronoun} ${nama}`;

const namaContainer2 = document.querySelector("#text-2");
namaContainer2.innerHTML = `${pronoun} ${nama}`;
