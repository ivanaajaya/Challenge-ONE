function creandoBoton(){
    var botonCopi = document.getElementById("bttCopi");
    let boton = document.createElement("button");
    boton.innerHTML = "Copiar";
    botonCopi.appendChild(boton);
    return;
}

function asignarTextoElemento(texto) {
    document.getElementById("myDIV").style.display = "none";
    let elementoHTML = document.getElementById('nuevoTexto');
    elementoHTML.innerHTML = texto;
    creandoBoton();
    return;
}
function encriptar() {
    let textoDesencriptando = document.getElementById('usuarioMensaje').value;
    let encriptando = textoDesencriptando.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
    if (encriptando != ''){
        asignarTextoElemento(encriptando);
    }else{
        asignarTextoElemento("ingresar un texto");
    }
    return;
}
function desencriptar() {
    let textoEncriptando = document.getElementById('usuarioMensaje').value;
    let desencriptando = textoEncriptando.replace(/ufat/g, "u")
                            .replace(/ober/g, "o")
                            .replace(/ai/g, "a")
                            .replace(/imes/g, "i")
                            .replace(/enter/g, "e");
    
    if (desencriptando != ''){
        asignarTextoElemento(desencriptando);
    }else{
        asignarTextoElemento("ingresar un texto");
    }
    return;
}
