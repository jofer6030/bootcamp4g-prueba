
const paises = new Array('Argentina','Brasil','Chile','Colombia','Uruguay','Bolivia')
console.log(paises)
console.table(paises)

for (let i = 0; i < paises.length; i++) {
  console.log(paises[i])
}

paises.forEach(function(elemento,index){
    console.log(`${index} - ${elemento}`)
})

const nuevoArrayPaises = paises.map((elemento,index) => {
    console.log(`${index} - ${elemento}`)
    // if(elemento === 'Argentina'){
    //     return "Perú"
    // }else {
    //     return elemento
    // }
    if(elemento.length === 7) {
        return elemento
    }
})
console.log(nuevoArrayPaises)
// console.log(paises)

const nuevoArrayPaisesFilter = paises.filter((elemento) =>{
    if(elemento.length === 7) {
        return elemento
    }
})
console.log(nuevoArrayPaisesFilter)

const indiceElemento = paises.findIndex((elemento) =>{
    if(elemento === 'Chile') {
        return elemento
    }
})
console.log(indiceElemento)

const numeros = [1,2,3,4,5]

const isInclude = numeros.includes(3)
console.log(isInclude)

const sumatoria = numeros.reduce((total,elemento) => total + elemento,100)

console.log(sumatoria)

const elementoEcontrado = numeros.find((elemento) => {
    if(elemento === 5) {
        return elemento
    }
})

console.log(elementoEcontrado)

const arr1 = [1,2]
const arr2 = [3,4]
const arr3 = arr1.concat(arr2,5,6)
console.log(arr3)
console.log(arr1)
