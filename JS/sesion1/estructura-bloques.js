const numero = 15;
const numeroString = "15";
const numero2 = 12;

if(numero===10) {
  console.log("Si es igual")
} else {
  console.log("No es igual")
}

if(numero !== numeroString) {
  console.log("No son iguales")
} else {
  console.log("Son iguales")
}

if(numero > numero2) {
  console.log(`${numero} es mayor que ${numero2}`)
} else {
  console.log(`${numero} es menor que ${numero2}`)
}

// numero 0, string vacio '', null, undefined
// !null true
// !undefined true
// !"" true
// !0 true
let texto;

if(!texto) {
  console.log("El texto ESTA VACIO")
} else {
  console.log("El texto TIENE VALOR")
}

// Scope
let nombre = "Juan"
let apellidoObtendio;

if(nombre==="Juan") {
  const apellido = "Perez"
  apellidoObtendio = obtenerApellido(apellido)
}

function obtenerApellido(apellido) {
  const saludo = "Hola Fernando"
  return apellido
}


console.log(nombre)
console.log(apellidoObtendio)
// console.log(saludo) no puede ser accedido

// v "y" v => v  // v "o" v => v
// v "y" f => f  // v "o" f => v
// f "y" v => f  // f "o" v => v
// f "y" f => f  // f "o" f => f

// Conectores Logicos
// AND => && ("y")
// OR => || ("o")
if( 10 < 20 && 40 > 15 && 5>10 ){ 
  console.log("Si es verdadero")
} else {
  console.log("falso")
}

if(10 < 20 || 40 < 15 || 5>10) {
  console.log("verdadero")
}else { 
  console.log("falso")
} 

if( 10 < 20 && (40 < 15 || 5 > 10) ) {
  console.log("verdadero")
} else {
  console.log("falso")
}


console.log( 10 < 5 ? "verdero" : 5 > 3 ? "si es mayor" : "es menor" )

const name = "Raul";

switch(name){
  case "Pedro":
    console.log("Hola Pedro");
    break;
  case "Juan":
    console.log("Hola Juan");
    break;
  case "José":
    console.log("Hola José");
    break;
  default:
    console.log(`Hola ${name}`);
}








