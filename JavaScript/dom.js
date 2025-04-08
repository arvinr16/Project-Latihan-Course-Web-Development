console.log("domManipulationOnJs");
console.log("materiDomManipulation");
console.log("materiTetapiBelumJadi-jadi");

// Beberapa cara pencarian Element dalam HTML dengan JavaScript :

// let el = document.getElementById("div-1");     // No 1. Menggunakan cara pemanggilaan metode by "ID" HTML
 
// let el = document.getElementsByTagName("div"); // No 2. Menggunakan cara pemanggilaan metode by "TagName" HTML 
// console.log(el[2]);

// let el = document.getElementsByClassName("div-2"); No 3. Menggunakan cara pemanggilaan metode by "ClassName" HTML
// console.log(el[0]);

let el = document.querySelector("div"); 
console.log(el);