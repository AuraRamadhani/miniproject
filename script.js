// ===== GREETING NAMA =====
let userName = prompt("Masukkan namamu:");
if (!userName) userName = "Guest"; // kalau nggak isi, default

document.addEventListener("DOMContentLoaded", () => {
  const greetingEl = document.querySelector(".hero h1");
  greetingEl.innerText = `Hi ${userName}, Welcome To Website`;
});

// ===== UPDATE JAM REALTIME =====
function updateTime() {
  const now = new Date();
  document.getElementById("currentTime").innerText = now.toLocaleString("id-ID");
}
updateTime();
setInterval(updateTime, 1000);

// ===== SUBMIT FORM MESSAGE US =====
document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const tanggal = document.getElementById("tanggalLahir").value;
  const gender = document.querySelector("input[name=gender]:checked").value;
  const pesan = document.getElementById("pesan").value.trim();

  if (nama === "" || pesan === "") {
    alert("Nama dan Pesan wajib diisi!");
    return;
  }

  document.getElementById("displayNama").innerText = nama;
  document.getElementById("displayGender").innerText = gender;
  document.getElementById("displayPesan").innerText = pesan;
  document.getElementById("displayTanggal").innerText = tanggal ? new Date(tanggal).toLocaleDateString("id-ID") : "-";

  alert("Pesan berhasil dikirim!");
  document.getElementById("messageForm").reset();
});

// ===== SMOOTH SCROLL NAV =====
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    document.querySelectorAll("nav a").forEach((a) => a.classList.remove("active"));
    this.classList.add("active");
  });
});
