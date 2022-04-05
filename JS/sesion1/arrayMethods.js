const numeros = [1,2,3,4,5]

console.log(numeros)

const paises = new Array('Argentina','Brasil','Chile','Colombia','Uruguay')
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
    if(elemento === 'Argentina'){
        return "Perú"
    }else {
        return elemento
    }
})
console.log(nuevoArrayPaises)
console.log(paises)
