// for, while, do while
const numeros = [1, 2, 3, 4, 5];

for(let i= 0; i<numeros.length; i++){
  // console.log(numeros[i])
}

for (const i of numeros) {
  // console.log(i)
}

const obj = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 30
}

for (const propiedad in obj) {
  if (Object.hasOwnProperty.call(obj, propiedad)) {
    const element = obj[propiedad];
    console.log(element)
  }
}

const values = Object.values(obj)
console.log(values)


// while

let i = 0;

while(i < numeros.length) {
  console.log(numeros[i])
  i+=2
}

i = 0;
do {  
  console.log(numeros[i])
  i++;
} while (i < numeros.length);