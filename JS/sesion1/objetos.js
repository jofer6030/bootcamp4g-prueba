// const nombre = "José";
// const apellido = "Velasque";
// const edad = 23;


// Objeto literal
const datosPersonales = {
  nombre: "José",
  apellido: "Velasque",
  edad: 23
}

// Acceder a un valor
console.log(datosPersonales.nombre);
console.log(datosPersonales.apellido);
console.log(datosPersonales.edad);

console.log(datosPersonales["nombre"])
console.log(datosPersonales["apellido"])
console.log(datosPersonales["edad"])

// Agregar propiedades
datosPersonales.pais = "Perú";

// Eliminar propiedades
delete datosPersonales.pais;
console.log(datosPersonales);

// Destructuring - Acceder a las propiedades(segunda forma)
const { nombre, apellido, edad } = datosPersonales;

console.log(nombre);
console.log(apellido);
console.log(edad);


const datosPersonales2 = {
  nombre: "José",
  apellido: "Velasque",
  edad: 23,
  estadisticas: {
    puntos: 100,
    rebotes: 50,
    asistencias: 30
  }
}

console.log(datosPersonales2)
console.log(datosPersonales2.estadisticas)
console.log(datosPersonales2.estadisticas.asistencias)

const { nombre:name, apellido:lastName,edad:age ,
  estadisticas:{puntos,rebotes,asistencias} } = datosPersonales2

console.log(`${name} ${lastName} ${age} ${puntos}`)

// Congelar un objeto --- no realizar modificaciones
Object.freeze(datosPersonales2)

datosPersonales2.pais = "Perú"
delete datosPersonales2.estadisticas
datosPersonales.nombre = "Juan"

console.log(datosPersonales2)
console.log(Object.isFrozen(datosPersonales2))

// Sellar un objeto ---- no realizar cambios en propipedades pero si en sus valores
Object.seal(datosPersonales2)
datosPersonales2.pais = "Perú";
delete datosPersonales2.estadisticas
datosPersonales2.nombre = "Juan"  

console.log(datosPersonales2)
console.log(Object.isSealed(datosPersonales2))


// COMBINAR OBJETOS
const deportes1 = {
  futbol: "Fútbol",
  basquet: "Basquet",
}

const deportes2 = {
  voley: "Voley",
  tenis: "Tenis",
}

// const deportes  = Object.assign(deportes1,deportes2)
// console.log(deportes)

// Spred Operator
const deportes3 = {...deportes1, ...deportes2, futbol:"Fútbol 2", natacion:"Natacion"}
console.log(deportes3)

// Object Constructor
function Persona(nombre,edad){
  this.nombre = nombre
  this.edad = edad
}

const persona1 = new Persona("Juan",23);
console.log(persona1);
console.log(persona1.nombre);
console.log(persona1.edad);

// Recorrer un Objeto
const datosPersonales3 = {
  nombre: "José",
  apellido: "Velasque",
  edad: 23
}

console.log(Object.keys(datosPersonales3))
console.log(Object.values(datosPersonales3))
console.log(Object.entries(datosPersonales3))

const obj = {}
const keys = Object.keys(obj)

console.log(keys.length>0)










