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

console.log(el);
console.log(el1);
