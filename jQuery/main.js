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

// Syntax mengubah isi Element HTML menggunakan '.html()' pada jQuery.
const el2 = $("#text");// = Mengambil elemen HTML dengan 'id="text"' dan menyimpannya dalam variabel 'el2'
                       //   menggunakan jQuery.
console.log(el2);// = Menampilkan objek jQuery 'el2' ke konsol untuk memastikan elemen berhasil dipilih.
el2.html("<h1>Tes Kata dari main.js(jQuery)</h1>");// = Mengubah isi dari elemen id '#text' menjadi tag '<h1>'
                                                   //   dengan teks.

console.log("");
// Syntax mengubah isi Attribut HTML menggunakan '.attr()' pada jQuery.
const inp = $("input");// = Memilih elemen '<input>' pertama yang ditemukan di dalam dokumen dan menyimpannya
                       //   dalam variabel 'inp'.
inp.attr("type", "checkbox");// = Mengubah attribut 'type' dari elemen '<input>' menjadi 'checkbox', sehingga
                             //   input menjadi checkbox.

// Syntax untuk menambah dan menghapus Class pada jQuery.
el2.addClass("red");// = Digunakan untuk menambahkan class 'red' ke elemen id '#text', yang nantinya akan memberikan
                    //   gaya/style CSS tertentu.
el2.addClass("blue");// = Menambahkan class 'blue' ke elemen id '#text', sehingga sekarang elemen memiliki dua class
                     //   'red' and 'blue'.

el2.removeClass("blue");// = Menghapus class 'blue' dari elemen id '#text', sehingga yang tersisa hanya class 'red'.
// el2.removeClass(); = Cara menghapus semua class pada jQuery menggunakan DOM Manipulation.