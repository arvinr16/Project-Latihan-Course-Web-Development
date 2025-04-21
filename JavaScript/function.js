// Materi tentang Function
console.log("");
console.log("Materi Function\n");
console.log(""); // Ini hanya bagian supaya lebih rapi pada saat console dibrowser.
// String di sebuah Function
function namaFunction() { // = Cara deklarasi function tanpa parameter. Fungsi ini
                          //   hanya mencetak teks ke console saat dipanggil. 
    console.log("Hallo ini Test String di Function");
}

namaFunction() // = Cara pemanggilan fungsi tersebut (namaFunction()).

console.log("")
// Arguments dan Parameters
console.log("Arguments dan Parameters");

function perkalian(num1, num2) { // = Fungsi perkalian menerima dua parameter: 'num1 dan num2'.
                                 // Di dalamnya, dilakukan operasi perkalian.
    console.log(num1 * num2);
}

perkalian(5,5); // = Memanggil fungsi dengan nilai argumen 5 dan 5.

console.log("");
// Default Parameters
console.log("Default Parameters");

function sayHello(name = "World") { // = Fungsi 'sayHello' memiliki parameter 'name' dengan default 'world'.
                                    //   Jika argumen tidak diberikan saat pemanggilan (contohnya 'sayHello()'), 
                                    //   maka nilai default akan dipakai. 
    console.log("Hello " + name);
}

sayHello("Paijo");
sayHello();

console.log("");
// Return Statements Parameters
console.log("Return Statements");
function calculateArea(p, l) { // = Fungsi 'calculateArea' mengembalikan hasil dari 'p * l', bukan mencetaknya.
    return p * l
}

calculateArea() // = dipanggil tanpa argumen, bisa menyebabkan hasil 'NaN' karena 'p dan l' tidak bernilai.
console.log(calculateArea(5, 5)); // = Mencetak hasil dari fungsi.


let result = calculateArea(5, 10); // = Menyimpan hasil dalam variabel, lalu dicetak.
console.log(result)

// Keyword Function
console.log("");
console.log("Keyword Function"); // = Ini contoh fungsi biasa dalam menggunakan 'function' keyword.
function keywordFunction() {     //   Fungsi ini mencetak string saat dipanggil.
    console.log("Keyword Function");
}
keywordFunction()

// Function Expression
console.log("");
console.log("Function Expression");
let functionExpression = function() { // = Function disimpan dalam variabel 'functionExpression'.
                                      //   Jenis ini disebut 'function expression'.
                                      //   Fungsi dapat dipanggil melalui variabel tersebut.
    console.log("Print 'Function Expression'");
}
functionExpression()

//Arrow Function
console.log("");
console.log("Arrow Function");
let arrowFunction = () => {
    console.log("Print 'Arrow Function'");
}
arrowFunction()

// Perbedaan Parameter dan Argumen yaitu :
// 
// A. Parameter
// 1. Definisi : Parameter adalah 'variabel' yang dideklarasikan dalam definisi fungsi.
// 2. Tujuan   : Parameter adalah tempat penampung nilai yang akan dikirim saat fungsi dipanggil.
// 3. Letak    : Muncul saat 'mendefinisikan' fungsi.
//    Contoh   : function sayHello(name) {
//               console.log("Hello, " + name); 
//               } * Disini, 'name' adalah parameter dari fungsi 'sayHello'.
// 
// B. Argumen
// 1. Definisi : Argumen adalah nilai nyata yang dikirimkan ke fungsi saat fungsi itu dipanggil.
// 2. Tujuan   : Memberikan input ke fungsi.
// 3. Letak    : Muncul saat memanggil fungsi.
//    Contoh   : sayHello("Alya"); 
//               * Di sini, '"Alya"' adalah argumen yang dikirim ke parameter 'name'.
