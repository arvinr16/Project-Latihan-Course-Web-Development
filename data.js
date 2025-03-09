function ubahTeks() {
    let judul = document.getElementById("judul");
    judul.textContent = "Teks Berubah Bisa Berubah, (klik berulang kali!)";
    
    // Cek warna saat ini, lalu ubah ke warna lain secara bergantian
    if (judul.style.color === "red") {
        judul.style.color = "blue";
    } else if (judul.style.color === "blue") { // Tambahkan kondisi di sini
        judul.style.color = "green";
    } else {
        judul.style.color = "red";
    }
}
