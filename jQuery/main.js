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
// inp.attr("type", "checkbox");// = Mengubah attribut 'type' dari elemen '<input>' menjadi 'checkbox', sehingga
                             //   input menjadi checkbox.


// Syntax untuk Add(menambah) dan Remove(menghapus) Class pada jQuery.
el2.addClass("red");// = Digunakan untuk menambahkan class 'red' ke elemen id '#text', yang nantinya akan memberikan
                    //   gaya/style CSS tertentu.
el2.addClass("blue");// = Menambahkan class 'blue' ke elemen id '#text', sehingga sekarang elemen memiliki dua class
                     //   'red' and 'blue'.

el2.removeClass("blue");// = Menghapus class 'blue' dari elemen id '#text', sehingga yang tersisa hanya class 'red'.
// el2.removeClass(); = Cara menghapus semua class pada jQuery menggunakan DOM Manipulation.


// Syntax untuk menggunakan CSS('css()') pada jQuery dengan menggunakan metode DOM Manipulation.
// inp.css("border", "1px solid crimson"); = Berfungsi mengatur properti 'CSS' border menjadi '1px solid crimson'.

// Syntax untuk menggunakan CSS pada jQuery dengan DOM Manipulaiton lebih dari satu.
inp.css({// = Di dalam 'Object', setiap pasangan 'key: value' merepresentasikan properti 'CSS' dan 'nilainya'.
    border: "3px solid crimson", // = Memberikan style properti CSS dengan memberikan ketebalan 3px berwarna Crimson(merah tua).
    marginLeft: "100px"// = Memberikan style properti CSS dengan memberikan jarak (margin) sebelah kiri 100px.
})

// DOM Event jQuery
console.log("Materi DOM Event jQuery");

// Berikut syntax jika menggunakan JavaScript biasa :
// const el3 = document.getElementById("text");
// el3.addEventListener("mouseenter", function() { = Memberikan style border pada saat mouse masuk ke elemen dengan id 'text'.
//     el3.style.border = "1px solid crimson"
// });

// Berikut syntax jika menggunakan jQuery pada JavaScript : 
const el3 = $("#text")// = Mengambil elemen dengan id 'text' menggunakan 'jQuery dan menyimpannya dalam variabel 'el3'.
el3.mouseenter(function() {// = Menambahkan Event Listener 'mouseenter' pada variabel 'el3'. Saat mouse diarahkan ke elemen tersebut,
                           //   maka border akan berubah stylenya.
    el3.css("border", "1px solid crimson")
})

const inp1 = $("input")// = Mengambil semua elemen '<input>' di HTML menggunakan 'jQuery' dan menyimpannya ke dalam variabel 'inp1'.
inp1.focus(function() {// = Menambahkan event listener 'focus' pada elemen input. Saat elemen mendapat fokus (seperti diklik), maka bordernya
                       //   akan berubah menjadi style yang berbeda.
    inp1.css("border", "3px solid blue")
})

const btnShow = $("#show");
const btnHide = $("#hide");
const btnFadeIn = $("#fadeIn");
const btnFadeOut = $("#fadeOut");
const btnToggle = $("#toggle");

const div = $("div");

btnShow.click(function() {
    div.show("slow")
})

btnHide.click(function() {
    div.hide("slow")
})

btnFadeIn.click(function() {
    div.fadeIn("slow")
})

btnFadeOut.click(function() {
    div.fadeOut("slow")
})

btnToggle.click(function() {
    div.toggle("slow")
})
