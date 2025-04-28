console.log("Materi DOM JS jQuery");

// const el = $("p"); = Digunakan 'jQuery' untuk memilih semua elemen '<p>' di dalam dokumen. 

// const el1 = document.getElementsByTagName("p"); = Cara native (vanilla JavaScript) untuk memilih semua
                                                //   elemen '<p>' dalam dokumen.
                                                
// const el2 = document.querySelectorAll("p"); = Menggunakan 'querySelectorAll' dari JavaScript untuk memilih
                                            //   semua elemen '<p>'.

const el = $("#hello");// = Baris ini menggunakan jQuery untuk memilih elemen dengan 'id="hello"'.
                       //   Hasilnya adalah objek 'jQuery' yang merepresentasikan elemen tersebut,
                       //   dan bisa digunakan untuk manipulasi DOM seperti mengubah teks, atribut, 
                       //   atau menambahkan event.

const el1 = $(".world");// = Menggunakan jQuery untuk memilih semua elemen yang memiliki 'class="world"'.
                        //   Ini akan mengembalikan objek jQuery berisi semua elemen yang cocok, yang bisa
                        //   dimanipulasi juga menggunakan metoder jQuery.

console.log(el);// = Menampilkan isi dari variabel 'el' ke konsol, biasanya untuk debugging atau verifikasi
                //   bahwa elemen dengan 'id="hello"' berhasil diambil.

console.log(el1);// = Menampilkan isi dari variabel 'el1' ke konsol, untuk melihat koleksi elemen dengan
                 //   'class="world"' yang berhasil dipilih.
console.log("");
console.log("Materi DOM JS jQuery DOM Manipulation");

// Syntax Mengubah Isi Element HTML menggunakan '.html()' pada jQuery
const el2 = $("#text");
console.log(el2);
el2.html("<h1>Tes Kata dari main.js(jQuery)</h1>");
