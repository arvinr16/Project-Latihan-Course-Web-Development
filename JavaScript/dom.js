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
                   // dalam case ini, Mengambil elemen dengan ID 'input' dan mengubah tipenya menjadi checkbox
// let input = document.getElementById("input");
// console.log(input);
// input.setAttribute("type", "checkbox"); // setAttribute("type", "checkbox") digunakan untuk mengubah tipe elemen input(teks) menjadi checkbox.
// let input2 = document.getElementById("input2");

// Change Element Style = Digunakan untuk mengubah tampilan atau style CSS dari elemen secara langsung melalui JavaScript.
                       // Dalam case ini, Mengubah warna border dan warna teks dari elemen dengan ID 'input2'
// input2.style.borderColor = "red"; // dalam case ini, style.borderColor mengubah warna border (garis tepi).
// input2.style.color = "crimson"; // dalam case ini, style.color mengubah warna teks dari elemen.

// Create Element = Digunakan untuk membuat elemen HTML baru secara dinamis dan menambahkannya ke dalam DOM
                //  Dalam case ini, Membuat elemen paragraf baru, menambahkan elemen ke dalam div dengan ID 'div-3', dan menetapkan isi teks elemennya.  
// const pElement = document.createElement("p"); // createElement("p") digunakan untuk membuat elemen paragraf (<p>).
// const divEl = document.getElementById("div-3"); // appendChild() digunakan untuk menambahkan elemen ke dalam elemen lain (misalnya ke dalam div).
// divEl.appendChild(pElement);
// pElement.innerHTML = "Hello Ini adalah P (create element)" // innerHTML digunakan untuk mengisi konten teks dari elemen paragraf <p> diatas.

// Delete Element = Digunakan untuk menghapus anak dari suatu elemen induk dalam DOM.
// divEl.removeChild(pElement); // Dalam case ini, 'removeChild()' akan menghapus elemen pElement dari dalam divEl.
                                // Menghapus elemen paragraf (pElement) dari elemen div (divEl).

console.log("");
console.log("Materi Event Listener");
const hello = document.getElementById("hello"); // Mengambil elemen HTML dengan 'id="hello"' dan menyimpannya dalam variable 'hello'.

hello.addEventListener("mouseenter", function() { // Menambahkan event listener ke elemen 'hello' yang akan dijalankan saat mouse masuk
                                                  // ke area elemen tersebut. Saat event terjadi, console akan menampilkan pesan, dan
                                                  // elemen 'hello' akan diberi border berwarna biru muda.
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