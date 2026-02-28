
const d=document,
    c=console.log


d.addEventListener("click", (e)=>{
     e.preventDefault();

     if(e.target.matches(".icon")){
       const text=d.querySelector(".input_comment").value

       if(text === ""){
            alert("ingresa un comentario")
       }else{
         const nuevo = crearComentario(text);
        document.querySelector(".comment").appendChild(nuevo);
       }
        
      

     }

      if(e.target.matches(".icon_delete")){
           e.preventDefault();

        const comentario = e.target.closest(".comentario_box");

        if (comentario) {
            comentario.remove();
        }

    
        
      

     }




})


function crearComentario(texto){

    const d = document;

    // Crear contenedor
    const $box = d.createElement("div");
    $box.classList.add("comentario_box");

    // Crear párrafo
    const $p = d.createElement("p");
    $p.classList.add("text_comentario");
    $p.textContent = texto;

    // Crear enlace
    const $a = d.createElement("a");
    $a.href = "#";

    // Crear imagen
    const $img = d.createElement("img");
    $img.classList.add("icon_delete", "icon_eliminar");
    $img.src = "img/basura.png";
    $img.alt = "eliminar";

    // Armar estructura
    $a.appendChild($img);
    $box.appendChild($p);
    $box.appendChild($a);

    return $box; // devuelve el elemento listo
}






