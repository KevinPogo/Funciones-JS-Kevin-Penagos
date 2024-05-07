console.log("trabajando")

let amarillo = document.querySelector("#amarillo");
console.log(amarillo)

let azul = document.querySelector("#azul");
console.log(azul)

let rojo = document.querySelector("#rojo");
console.log(rojo)

let gris = document.querySelector("#gris");
console.log(gris)

let sinco = document.querySelector("#sinco");
console.log(sinco)

let cuadro = document.querySelector("#cuadro")
console.log (cuadro)

let conta = document.querySelector("#container")
console.log (conta)

let boton = document.querySelector("#botones")
console.log (boton)

let titulo = document.querySelector("h1")
console.log (titulo)

titulo.style.margin = "0"
titulo.style.fontWeight = "bold"
titulo.style.textAlign = "center"
boton.style.border = "1px solid black"
boton.style.display = "flex"
boton.style.flexDirection = "column"
boton.style.width = "30vw"
boton.style.gap = "10px"
amarillo.style.backgroundColor = "yellow"
azul.style.backgroundColor = "blue"
rojo.style.backgroundColor = "red"
gris.style.backgroundColor = "gray"
sinco.style.backgroundColor = "transparent"
conta.style.height = "80vh"
conta.style.display = "flex"
cuadro.style.border = "1px solid black"
cuadro.style.width = "50vw"

amarillo.addEventListener("click",
    function mensaje() {
    console.log("Buscando el color amarillo")
    cuadro.style.backgroundColor = "yellow"
    }
    
)

azul.addEventListener("click",
    function mensaje() {
    console.log("Buscando el color azul")
    cuadro.style.backgroundColor = "blue"
    }
    
)

rojo.addEventListener("click",
    function mensaje() {
    console.log("Buscando el color rojo")
    cuadro.style.backgroundColor = "red"
    }
    
)

gris.addEventListener("click",
    function mensaje() {
    console.log("Buscando el color gris")
    cuadro.style.backgroundColor = "gray"
    }
    
)

sinco.addEventListener("click",
    function mensaje() {
    console.log("Buscando el color sin color")
    cuadro.style.backgroundColor = "transparent"
    }
)



