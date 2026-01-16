function updateTime() {
  const now = new Date();
  document.getElementById("currentTime").innerText = now.toLocaleString();
}

updateTime();
setInterval(updateTime, 1000);

document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // AMBIL VALUE DARI INPUT
  const namaInput = document.getElementById("nama").value;
  const tanggalInput = document.getElementById("tanggalLahir").value;
  const genderInput = document.querySelector("input[name=gender]:checked").value;
  const pesanInput = document.getElementById("pesan").value;

  // TAMPILKAN KE BOX KANAN
  document.getElementById("displayNama").innerText = namaInput || "-";
  document.getElementById("displayGender").innerText = genderInput;
  document.getElementById("displayPesan").innerText = pesanInput || "-";

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
});
