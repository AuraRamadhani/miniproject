function updateTime() {
  const now = new Date();
  document.getElementById("currentTime").innerText = now;
}

updateTime();
setInterval(updateTime, 1000);

document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = nama.value;
  const tanggal = tanggalLahir.value;
  const gender = document.querySelector("input[name=gender]:checked").value;

  const pesan = pesan.value;

  displayNama.innerText = nama || "-";
  displayGender.innerText = gender;
  displayPesan.innerText = pesan || "-";

  if (tanggal) {
    let d = new Date(tanggal);

    displayTanggal.innerText = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
  }

  alert("Pesan berhasil dikirim!");
});
