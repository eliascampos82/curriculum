let imagen=document.getElementById("foto")
imagen.addEventListener("mouseover",img_titulo)

function img_titulo (){
    titulo_desarrollador.innerText="FRONT END DEVELOPER"
    
}




cambiar = document.getElementById("mail");
let titulo_desarrollador=document.getElementById("cambios");
cambiar.addEventListener("click", cambio_titulo);


function cambio_titulo(){
    titulo_desarrollador.innerText="eliascampos2949@gmail.com";
}



cambiar = document.getElementById("fecha");
titulo_desarrollador=document.getElementById("cambios");
cambiar.addEventListener("click", cambio_fecha);


function cambio_fecha(){
    titulo_desarrollador.innerText="29/05/1982, 40 años";
}





cambiar= document.getElementById("what");
titulo_desarrollador=document.getElementById("cambios")
cambiar.addEventListener("click", cambio_what)


function cambio_what(){
    titulo_desarrollador.innerText="+54 2241-409410";
}




cambiar= document.getElementById("linkedin");
titulo_desarrollador=document.getElementById("cambios")
cambiar.addEventListener("click", cambio_link)


function cambio_link(){
    titulo_desarrollador.innerText="linkedin.com/in/francisco-elias-campos-62751b244";
}


