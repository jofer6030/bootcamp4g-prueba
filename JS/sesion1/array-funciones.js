
function miFuncion(a,b){
    console.log(a)
    console.log(b)
}

miFuncion("Hola","Juan");
miFuncion(1,5)

// + en String --> concatenar
// + en Number --> sumar
function sumar (numero1,numero2) {
    console.log(numero1 + numero2)
}

sumar(10,15)
sumar("10","15")

function restar (n1,n2) {
    console.log(n1 - n2)
    return n1 - n2 // 7
}

const resta = restar(20,13)
const resta2 = restar(100,50)
console.log(resta)
console.log(resta2)

const array = [1, 2, 3, "Juan", 5];
console.log(typeof array)

// Arrays methods
// for(let i = 0; i < array.length; i++){
//     console.log(array[i]); //1,2,3,4,5,6,7,8,9,10
// }

function funcionIterador(elemento,index) {
    // console.log("elemento",elemento,"indice",index)
    return elemento + 1
}

// array.forEach(funcionIterador)

// [1,3,5,"Juan3",9]
const arrrayNuevo = array.map(funcionIterador)
console.log(arrrayNuevo)

const arrayBoolean = [false,false,false]


function convertFalseToTrue(elemento,index) {
  return elemento===false 
}

const arrayTrue = arrayBoolean.map(convertFalseToTrue)
console.log(arrayTrue)

// function funcionFlecha(str1){
//     return str1
// }

const funcionFlecha = str1 => str1

console.log(funcionFlecha("Hola"))

// function convertFalseToTrue(elemento,index) {
//     return elemento===false 
//   }
  
// const arrayTrue = arrayBoolean.map(convertFalseToTrue)
const arrayTrueNuevo = arrayBoolean.map(elemento => !elemento)
console.log(arrayTrueNuevo)

// filter
const arrayNumerosString = [1,2,"Hola",3,"Mundo",4,"Jose",5]
const arNS = arrayNumerosString.filter((elemento,index) => {
    if(typeof elemento === "string"){
        return elemento
    }
})