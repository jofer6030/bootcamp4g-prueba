const n1 = 15;
const n2 = "15";
const n3 = 25;


// Operador mayor que
console.log(n1 > n2) // true
console.log(n1 > n3) // false

// Operador menor que
console.log(n1 < n2) // false
console.log(n1 < n3) // true

// Operador de Igualdad
console.log(n1 == n2) 
console.log(n2 == n3)

// Operador de Igualdad estricta
console.log(n1 === n2)
console.log(typeof n1)
console.log(typeof n2)

// Operador de diferencia
console.log(n1 != n2) // true
console.log(n1 !== n2) // false
console.log(n1 !== Number(n2)) // false

// null y undefined
let texto;
console.log(texto)
console.log(typeof texto)

let texto2 = null;
console.log(texto2) 
console.log(typeof texto2)

// undefined == null
console.log(texto == texto2)  // TRUE
console.log(texto === texto2) // FALSE



