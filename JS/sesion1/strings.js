const nombre = "José";
console.log(typeof nombre); // tipo de variable
console.log(nombre);

// minusculas - mayusculas
const nombreMinus = nombre.toLowerCase();
console.log(nombreMinus);
const nombreMayus = nombre.toUpperCase();
console.log(nombreMayus);

// longitud de la cedena de texto
const apellido = "Perez Ramos";
console.log(apellido.length);

// decalrar strings
const string1 = "Una cadena primitiva";
const string2 = 'También una cadena primitiva';
const string3 = `Otra cadena primitiva más`;

console.log(string1);
console.log(string2);
console.log(string3);

// concatenar strings
console.log( string1 + string2 + string3 )
console.log( string1,string2,string3 )
console.log(string1.concat(string2))
console.log(`${string1} ${string2} y aqui la tercera forma ${string3}`);

// charAt();
const texto = "Bootcamp PachaQTec" 
console.log(texto.charAt(9));
console.log(texto[9]);

// endsWith()
const texto2 = "Hola Mundo"
console.log(texto2.endsWith("Mundo")); // true verdadero false falso
console.log(texto2.endsWith("Hola")); // true verdadero false falso
console.log(texto2.endsWith("o")); // true verdadero false falso

// includes()
const texto3 = "Hola Mundo otra vez"
console.log("Include",texto3.includes("z")); // true verdadero false falso

//indexOf()
console.log("Blue Whale".indexOf("Blue"))    
console.log("Blue Whale".indexOf("Blute"))    
console.log("Blue Whale".indexOf("Whale",5)) 
// console.log("Blue Whale".indexOf("",9))
// console.log("Blue Whale".indexOf("",10))
// console.log("Blue Whale".indexOf("",11))

// trim()
const texto4 = "   Hola Mundo   "
console.log(texto4);
console.log(texto4.trim());

// substring()
const texto5 = "Fernando"
console.log(texto5.substring(0,3));

//slice()
const texto6 = "Fernando"
console.log(texto6.slice(3,-1));

// split()
const texto7 = "Hola-Mundo"
console.log(texto7.split("-"))

const str = "Robin Singh sda";
console.log(str.split(" "));



