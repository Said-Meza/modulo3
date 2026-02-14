let frutas= [ "manzana","fresa","manzana","naranja","fresa" ,"fresa"]

let frutero={

}

for (let index = 0; index < frutas.length; index++) {
    

    if(frutero.hasOwnProperty(frutas[index])){
           
             frutero[frutas[index]] = frutero[frutas[index]] + 1
    }
    else{
      
        frutero[frutas[index]] = 1
    }
    
}

console.log(frutero)