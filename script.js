// ===== GREETING HI NAME =====
let user = prompt("Masukkan nama kamu:");
if (user) {
  document.getElementById("greeting").innerText =
    "Hi " + user + ", Welcome To Website";
}

// ===== UPDATE WAKTU =====
function updateTime() {
  const now = new Date();
  document.getElementById("currentTime").innerText =
    now.toLocaleString();
}

updateTime();
setInterval(updateTime, 1000);

// ===== FORM SUBMIT =====
document
  .getElementById("messageForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const namaInput = document.getElementById("nama").value;
    const tanggalInput =
      document.getElementById("tanggalLahir").value;

    const genderInput = document.querySelector(
      "input[name=gender]:checked"
    ).value;

    const pesanInput =
      document.getElementById("pesan").value;

    // tampilkan ke kanan
    document.getElementById("displayNama").innerText =
      namaInput || "-";

    document.getElementById("displayGender").innerText =
      genderInput;

    document.getElementById("displayPesan").innerText =
      pesanInput || "-";

    // format tanggal
    if (tanggalInput) {
      let d = new Date(tanggalInput);

      const formatTanggal =
        d.getDate() +
        "/" +
        (d.getMonth() + 1) +
        "/" +
        d.getFullYear();

      document.getElementById(
        "displayTanggal"
      ).innerText = formatTanggal;
    } else {
      document.getElementById(
        "displayTanggal"
      ).innerText = "-";
    }

    alert("Pesan berhasil dikirim!");
  });

// ===== NAV ACTIVE AUTO =====
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function () {
    document
      .querySelectorAll("nav a")
      .forEach((a) => a.classList.remove("active"));

    this.classList.add("active");
  });
});
