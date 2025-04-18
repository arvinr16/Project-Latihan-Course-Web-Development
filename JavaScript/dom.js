console.log("domManipulationOnJs");
console.log("materiDomManipulation");
console.log("materiTetapiBelumJadi-jadi");

// Beberapa cara pencarian Element dalam HTML dengan JavaScript :

// let el = document.getElementById("div-1");     // No 1. Menggunakan cara pemanggilaan metode by "ID" HTML
                                                  // Fungsi: Mengambil satu elemen berdasarkan id-nya.
                                                  // Hasil: Mengembalikan elemen tunggal.
 
// let el = document.getElementsByTagName("div"); // No 2. Menggunakan cara pemanggilaan metode by "TagName" HTML 
                                                  // Fungsi: Mengambil semua elemen dengan tag tertentu (misalnya div, p, li).
                                                  // Hasil: Mengembalikan HTMLCollection (mirip array).
// console.log(el[2]);

// let el = document.getElementsByClassName("div-2"); No 3. Menggunakan cara pemanggilaan metode by "ClassName" HTML
                                                   // Fungsi: Mengambil semua elemen yang memiliki class tertentu.
                                                   // Hasil: Mengembalikan HTMLCollection. 
// console.log(el[0]);

// querySelector = memungkinkan untuk mengambil elemen HTML berdasarkan kelas, id, atau tag seperti saat menggunakan CSS.
// let ele = document.querySelector("div");
// console.log(ele)
// let el = document.querySelector("#div-1");
// console.log(el);

// Set HTML Content = innerHTML digunakan untuk mengatur konten HTML dari suatu elemen, bisa berupa teks atau bahkan tag HTML baru.
                   // Menetapkan atau mengganti isi HTML dari elemen tertentu menggunakan innerHTML.
                   // Cocok digunakan saat kita ingin menambahkan konten dinamis ke dalam halaman.
// ele.innerHTML = "<p>Ini percobaan InnerHTML untuk membuat Element baru</p>";
// el.innerHTML = "Hallo Ini Percobaan menggunakan InnerHTML";

// Change Attribute = getElementById digunakan untuk mengambil elemen HTML dengan ID tertentu.
                   // dalam case ini Mengambil elemen dengan ID 'input' dan mengubah tipenya menjadi checkbox
// let input = document.getElementById("input");
// console.log(input);
// input.setAttribute("type", "checkbox"); // setAttribute("type", "checkbox") digunakan untuk mengubah tipe elemen input(teks) menjadi checkbox.
// let input2 = document.getElementById("input2");

// Change Element Style
// input2.style.borderColor = "red";
// input2.style.color = "crimson";

// Create Element
// const pElement = document.createElement("p");
// const divEl = document.getElementById("div-3");

// divEl.appendChild(pElement);
// pElement.innerHTML = "Hello Ini adalah P (create element)"

// Delete Element
// divEl.removeChild(pElement);

console.log("");
console.log("Materi Event Listener");
const hello = document.getElementById("hello");

hello.addEventListener("mouseenter", function() {
    console.log("Hello Ini Event Listener");
    hello.style.border = "3px solid lightblue";
})
// Materi Event Listener (Cara Pertama)
const btn = document.getElementById("btn");
btn.addEventListener("click", function() {
    const boom = document.getElementById("boom");
    boom.style.display = "block"
})
// Materi Event Listener (Cara Kedua, buat Fungsi terpisah di file HTML)
function showBoom() {
    const boom = document.getElementById("boom");
    boom.style.display = "block"
}
function addBorder(el) {
    el.style.border = "2px solid lightblue";   
}