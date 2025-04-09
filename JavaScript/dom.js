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

// querySelector memungkinkan untuk mengambil elemen HTML berdasarkan kelas, id, atau tag seperti saat menggunakan CSS.
let ele = document.querySelector("div");
console.log(ele)
let el = document.querySelector("#div-1");
console.log(el);

// Set HTML Content
ele.innerHTML = "<p>Ini percobaan InnerHTML untuk membuat Element baru</p>";
el.innerHTML = "Hallo Ini Percobaan menggunakan InnerHTML";

// Change Attribute
let input = document.getElementById("input");
console.log(input);
input.setAttribute("type", "checkbox");
let input2 = document.getElementById("input2");
input2.style.borderColor = "red";
input2.style.color = "crimson";