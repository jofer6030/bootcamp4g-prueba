// alert('Error')

// const tituloPrincipal = document.querySelector("h1");
// const subtitulos = document.querySelectorAll("h2");
// const subtituloClass = document.querySelector(".subtitulo")
// const titulo3 = document.querySelector("#titulo_3")

// const id = document.getElementsByTagName("#titulo_3")
// const clase = document.getElementsByClassName("subtitulo")
// console.log(clase)

// console.log(tituloPrincipal)
// console.log('Array-subtitulo',subtitulos)
// console.log('Clase',subtituloClass)
// console.log("Titulo3", titulo3)

// tituloPrincipal.addEventListener('click',obtenerDato)


// function obtenerDato(event) {
//   console.log(event.target.style.color)
  
//   if(event.target.classList.contains("titulo")) {
//     // event.target.style.color = "red"
//     // event.target.style.fontSize = "2rem"
//     // event.target.style.transition = "all 0.5s ease"
//     if(!event.target.classList.contains("active")){
//       event.target.classList.add('active')
//     }else {
//       event.target.classList.remove('active')
//     }
//   }
// }

// const idCuadro = document.querySelector("#cuadro")
const idCuadro = document.getElementById("cuadro")

idCuadro.addEventListener("click", cambiarPosicionColor)


function cambiarPosicionColor(e) {
  const r = Math.round(Math.random()*200); 
  const g = Math.round(Math.random()*200);
  const b = Math.round(Math.random()*200);

  e.target.style.backgroundColor = `rgb(${r},${g},${b})`
  e.target.style.width = `${Math.random()*1000}px`
  e.target.style.height = `${Math.random()*1000}px`
  e.target.style.top = `${Math.random()*600}px`
  e.target.style.left = `${Math.random()*600}px`
}