console.log("Hello, World! (external)")
// console.log("Hello, World! (external)")

// Di JavaScript ada beberapa jenis variable, yaitu :

// 1. Ini adalah contoh penggunaaan Variable "var
// (bisa dideklarasikan ulang dalam satu scope yang sama.)"
// var iniVariable = "Ini adalah variable dari JavaScript";
// console.log(iniVariable);
// var iniVariable = "Ini variable below";
// console.log(iniVariable);
// var iniVariable = "Ini variable again";
// console.log(iniVariable);

// 2. Ini adalah contoh penggunaan Variable "let
// (tidak bisa dideklarasikan ulang dalam scope yang sama.)"
// let iniVariable = "Ini adalah variable";
// console.log(iniVariable);
// iniVariable = "Ini adalah variable again";
// console.log(iniVariable);

// 3. Ini adalah contoh penggunaan Variable "const
// (nilainya tetap/tidak bisa diubah)"
// const constVariable = "Ini adalah const";
// console.log(constVariable);
// const constVariable = "Hello from const";
// constVariable = "Hello from const again";

// Di JavaScript ada beberapa Tipe Data, yaitu :
// 1. Tipe Data "Undefined(tidak di definisikan)"
let undefinedValue;
console.log(undefinedValue);

// 2. Tipe Data "null(kosong/tidak memberikan nilai apapun)"
let nullValue = null;
console.log(nullValue);

// 3. Tipe Data "Number(angka/nomor)"
let numberValue = 10;
console.log(typeof numberValue);

// 4. Tipe Data "String(baris kata/huruf"
let stringValue = "\nHello\nKawan\n\n";
console.log(stringValue);

// 5. Tipe Data "Boolean(hanya ada True or False)"
let booleanValue = true;
console.log(booleanValue);
booleanValue = false;
console.log(booleanValue);
booleanValue = false;
console.log(typeof booleanValue);

// 6. Tipe Data "Object
// (tipe data yang digunakan untuk menyimpan koleksi 
// nilai dalam bentuk key-value pairs.)"
let objectValue = {
    kunci: "Hellow Kunci",
    a: 1,
    boolean: true
}
console.log(typeof objectValue.kunci);
console.log(typeof objectValue.a);
console.log(typeof objectValue.boolean);
