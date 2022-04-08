const nav = document.querySelector(".navbar")
const body = document.querySelector("body")

const enlace = document.createElement("A");
const titulo = document.createElement("H1");

enlace.textContent = "Primer Enlace"
enlace.href="www.google.com"
enlace.classList.add("enlace")

// nav.appendChild(enlace);
nav.insertBefore(enlace,nav.children[2])

titulo.textContent = "Titulo Principal"

console.log(body.children)
 
body.insertBefore(titulo,body.children[0])
