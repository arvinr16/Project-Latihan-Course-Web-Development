console.log("Materi DOM JS jQuery");

// const el = $("p"); = Digunakan 'jQuery' untuk memilih semua elemen '<p>' di dalam dokumen. 

// const el1 = document.getElementsByTagName("p"); = Cara native (vanilla JavaScript) untuk memilih semua
                                                //   elemen '<p>' dalam dokumen.
                                                
// const el2 = document.querySelectorAll("p"); = Menggunakan 'querySelectorAll' dari JavaScript untuk memilih
                                            //   semua elemen '<p>'.

const el = $("#hello");

const el1 = $(".world")

console.log(el);
console.log(el1);
