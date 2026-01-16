// ===== UPDATE JAM REALTIME =====
function updateTime() {
  const now = new Date();
  document.getElementById("currentTime").innerText = now.toLocaleString("id-ID");
}

updateTime();
setInterval(updateTime, 1000);

// ===== SUBMIT FORM =====
document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const namaInput = document.getElementById("nama").value.trim();
  const tanggalInput = document.getElementById("tanggalLahir").value;
  const genderInput = document.querySelector("input[name=gender]:checked").value;
  const pesanInput = document.getElementById("pesan").value.trim();

  // VALIDASI SEDERHANA
  if (namaInput === "" || pesanInput === "") {
    alert("Nama dan Pesan wajib diisi ya!");
    return;
  }

  // TAMPILKAN HASIL
  document.getElementById("displayNama").innerText = namaInput;
  document.getElementById("displayGender").innerText = genderInput;
  document.getElementById("displayPesan").innerText = pesanInput;

  // FORMAT TANGGAL
  if (tanggalInput) {
    let d = new Date(tanggalInput);

    const formatTanggal =
      d.getDate() +
      "/" +
      (d.getMonth() + 1) +
      "/" +
      d.getFullYear();

    document.getElementById("displayTanggal").innerText = formatTanggal;
  } else {
    document.getElementById("displayTanggal").innerText = "-";
  }

  alert("Pesan berhasil dikirim!");

  // RESET FORM
  document.getElementById("messageForm").reset();
});

// ===== SMOOTH SCROLL NAVIGATION =====
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const tujuan = document.querySelector(this.getAttribute("href"));

    tujuan.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    // efek active
    document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
    this.classList.add("active");
  });
});
