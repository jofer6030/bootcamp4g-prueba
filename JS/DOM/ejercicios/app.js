const body = document.querySelector("body");
const h1 = document.createElement("H1");
const ul = document.createElement("UL");
const liItems = ["Inicio","Nosotros","Contacto"];
const main = document.createElement("MAIN");
const sectionItems = [1,2,3];

h1.textContent = "Pagina Principal"
h1.classList.add("titulo")
body.appendChild(h1)

liItems.forEach(item => {
  const li = document.createElement("LI");
  li.textContent=item
  li.classList.add("item")
  ul.appendChild(li)
})

body.appendChild(ul)

sectionItems.forEach(item => {
  const section = document.createElement("SECTION")
  const h2 = document.createElement("H2");
  const p = document.createElement("P");
  h2.textContent= `Subtitulo Pagina Principal ${item}`
  h2.classList.add('subtitulo')
  p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, esse. Provident commodi nostrum blanditiis quia expedita, veritatis quod hic est deserunt, corporis, illo inventore voluptatibus magnam deleniti eos dignissimos ea.'
  section.appendChild(h2)
  section.appendChild(p)
  main.appendChild(section)
})


body.appendChild(main)