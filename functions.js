
let librosLeidos =[];

function agregarLibro (title){

    librosLeidos.push(title)

}

function mostrarLibrosLeidos(){

   for (let index = 0; index < librosLeidos.length; index++) {
    console.log(librosLeidos[index])
    
   }

}

agregarLibro("100 años de soledad")
agregarLibro("el diario de ana frank")
agregarLibro("el caballero de la armadura cuadrada")

mostrarLibrosLeidos()