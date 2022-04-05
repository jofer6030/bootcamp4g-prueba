// Hoisting


restar() // Funciona igual

// Function Declaration
function restar () {
  console.log(10-5)
}

restar()

// restar2() Error de hoisting

// Function Expression
const restar2 = function () {
  console.log(15-5)
}

const hola = "hola"

restar2()

// Funcion---Método
const n1 = 10;
const n2 = "20";

//Funcion
console.log(Number(n2))

//Metodo
console.log(n1.toString());

function sumar(a,b) {
  // console.log(a+b)
  return a+b
}

sumar(10,16)
sumar(24,67)

const saludar = function (nombre="Juan") {
  console.log(`Hola ${nombre}`)
}

saludar();
saludar("Ana");


function proceso (nombre,n1,n2) {
  console.log("Inicio")
  saludar(nombre)
  console.log("Suma dos numeros")
  const suma = sumar(n1,n2)
  console.log(`La suma es ${suma}`)
  console.log("Fin");
}

// const nombre = prompt("Ingrese su nombre")
// const nU1 = Number(prompt("Ingrese el primer numero"))
// const nU2 = Number(prompt("Ingrese el segundo numero"))

proceso("Juan",1,2);

function obtenerDatos (nombres,apellidos) {
  return `${nombres} ${apellidos}`
}

const datos = obtenerDatos("Juan","Perez")
console.log(datos)

// const saludar2 = function (nombre) {
//   console.log(nombre)
// }

// Funciones de Flecha
const saludar3 = nombre => (nombre)


const name = saludar3("Jose")
console.log(name)