const numero = 15; // Asignacion de varaible
const texto = "20";
console.log(typeof numero);

console.log(Math.max(13,numero))
console.log(Math.min(13,numero))


//la variable numero ¿es un "no" numero?
// is Not A Number
console.log(isNaN(numero)) // false
console.log("texto", isNaN(texto)) // 

console.log(numero == texto) // comparacion flexible
console.log(numero === texto) // comparacion estricta

const decimal = 10.9326235623;
console.log(decimal.toFixed(3)) // redondea a tres decimales

console.log(Number(decimal.toFixed(2))) // redondea a dos decimales

console.log(Math.floor(decimal)) // redondea hacia abajo 10
console.log(Math.round(decimal)) // redondeo normal 11
console.log(Math.ceil(decimal)) // redondea hacia arriba 11

// const numeroToString = numero.toString();
const numeroToString = String(numero);
console.log(numeroToString)

const decimal2 = 10;
console.log(Number.isInteger(decimal2)) 