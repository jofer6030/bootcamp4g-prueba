const nombres = ["Juan", "Pedro", "María", "José",["Alberto","Fernando"]];

console.log(nombres[0])
console.log(nombres[1])
console.log(nombres[2])
console.log(nombres[3])
console.log(nombres[4][0])
console.log(nombres[4][1])


console.log(nombres.length) // 5

for(let i = 0; i < nombres.length; i++){
  console.log(nombres[i])
}

// Agregar elementos con push al final del array
nombres.push("Carlos")

// Agregar elementos con unshift al incio del array
nombres.unshift("Ana")

// console.table(nombres)

// Eliminar elementos con pop al final del array
nombres.pop()
nombres.pop()

// Eliminar elementos con shift al inicio del array
nombres.shift()
nombres.shift()
console.log(nombres)

const persona1 = {
  nombre: "Juan",
  edad: 20
}

const persona2 = {
  nombre: "Pedro",
  edad: 30
}

const arr = [persona1, persona2]

const arrObj = [...arr]

const deportes = ["FutbolA", "BasquetA", "VoleyA"]

//Destructuracion de arrays
const [ a,,c ] = deportes
console.log(a)
// console.log(b)
console.log(c)