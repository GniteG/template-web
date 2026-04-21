function gantiWarna() {
  const teks = document.querySelector("h1");
  teks.style.color = teks.style.color === "red" ? "#238636" : "red";
  alert("Warna berhasil diganti oleh GniteG!");
}

// Menambahkan event klik pada kartu
document.querySelector(".card").addEventListener("click", gantiWarna);
