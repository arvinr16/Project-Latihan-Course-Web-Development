// console.log("Hello, World! (external)")

// Type of Variable in JavaScript
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

// Data Type of JavaScript
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



// Arithmetic Operators

let num1 = 2, num2 = 3, num3 = 5;

// Tambah (+)
console.log(10 + 20);
console.log(num1 + num2);

// Kurang (-)
console.log(20-10);
console.log(num3 - num2);

// Perkalian (*)
console.log(5 * 10);
console.log(num2 * num1);

// Pembagian (/)
console.log(10 / 2);
console.log(num3 / num1);

// Perpangkatan (**)
console.log(2 ** 3);
console.log(num3 ** 3);

// Modulus (%)
console.log(10 % 2);
console.log(num3 % 2);

// Increment (++)
console.log(num1++); // Hasil 2 karena ditampilkan dulu 
                     // baru tambah nanti setelah di print(console.log)
console.log(num1);   // Tampilkan hasil dari penambahan di atas

console.log(++num1); // Tambah dulu baru tampilkan

// Decrement (--)
console.log(num3--);
console.log(num3);
console.log(--num3);

let hitungValue = {
    tambah: 1+1,
    kurang: 20-10,
    perkalian: 5*5
}
console.log(hitungValue.tambah)
console.log(hitungValue.kurang)
console.log(hitungValue.perkalian)

// Cara untuk melakukan penambahan nilai dari Variable
num1 += num3;
console.log(num1);

let numIf1 = 10, numIf2 = 20;

console.log("Materi Conditional");
if (numIf1 > numIf2) {
    console.log("Kondisi Benar");
} else if(numIf1 < numIf2){
    console.log("Kondisi kedua Benar");
} else {
    console.log("Kondisi Salah");
}

let numArith1 = 11, numArith2 = 10;

console.log("Conditional Arithmetic");
if(numArith1 > numArith2) {
    console.log(200 * 2);
} else if(numArith1 < numArith2) {
    console.log(1000 / 10);
} else if(numArith1 >= numArith2) {
    console.log(1000 + 2000);
} else if(numArith1 <= numArith2) {
    console.log("Semua Kondisi Arithmetic Salah");
}

console.log("Conditional Statement/Comparison Operator");
// Conditional Statement ==(Sama Dengan)
console.log("Conditonal Statement ==(sama dengan)");
let var1 = 10, var2 = 11;

if (var1 == var2) {
    console.log("If 1 Benar");
}
if (var1 === var2) {
    console.log("If 2 Benar");
} else {
    console.log("If 2 Salah");
}

// Conditional Statement !=(Beda Dengan)
console.log("Conditional Statement !=(beda dengan)");
let var7 = 10, var8 = 11;

if (var1 != var2) {
    console.log("If 1 Benar");
} 
if (var1 !== var2) {
    console.log("If 2 Benar");
} else {
    console.log("If 2 Salah");
}

// Conditional Statement >(Lebih Besar)
console.log("Conditional Statement >(lebih besar)");
let var3 = 19, var4 = 20;

if (var3 > var4) {
    console.log("var3 lebih besar dari var4");
} else {
    console.log("var3 lebih kecil dari var4");
}

// Conditional Statement <(Lebih Kecil)
console.log("Conditional Statement <(lebih kecil)");
let var5 = 10, var6 = 20;
if (var5 < var6) {
    console.log("var5 lebih kecil dari var6");
} else {
    console.log("var5 lebih besar dari var6");
}
