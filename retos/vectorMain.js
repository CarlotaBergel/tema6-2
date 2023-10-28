let vector = require("./libreriaVector.js")

let arr = vector.crearVector(10,3);
let arr2= vector.crearVector(10,5);

console.log(vector.crearVector(3,8));
console.log(vector.sumaVector(arr, arr2));
console.log(vector.productoNumeroVector(5, arr2));
console.log(vector.restaVector(arr, arr2));
console.log(vector.restaVector(arr, arr2));