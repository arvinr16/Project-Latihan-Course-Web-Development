// Materi tentang Function
console.log("");
console.log("Materi Function\n");
console.log("");
// String di sebuah Function
function namaFunction() {
    console.log("Hallo ini Test String di Function");
}

namaFunction()

console.log("")
// Arguments dan Parameters
console.log("Arguments dan Parameters");

function perkalian(num1, num2) {
    console.log(num1 * num2);
}

perkalian(5,5);

console.log("");
// Default Parameters
console.log("Default Parameters");

function sayHello(name = "World") {
    console.log("Hello " + name);
}

sayHello("Paijo");
sayHello();

console.log("");
// Return Statements Parameters
console.log("Return Statements");
function calculateArea(p, l) {
    return p * l
}

calculateArea()
console.log(calculateArea(5, 5));


let result = calculateArea(5, 10);
console.log(result)

// Keyword Function
console.log("");
console.log("Keyword Function");
function keywordFunction() {
    console.log("Keyword Function");
}
keywordFunction()

// Function Expression
console.log("");
console.log("Function Expression");
let functionExpression = function() {
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
