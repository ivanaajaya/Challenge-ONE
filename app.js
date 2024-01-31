function limpiarCaja() {
    document.querySelector('#usuarioMensaje').value = '';
    return;
}
function botonOcultar() {
    let botonOculto = document.getElementById("botonOculto");
    botonOculto.style.display = "none"; // Oculta el botón
    return;
}
function botonMostrar() {
    let botonOculto = document.getElementById("botonOculto");
    botonOculto.style.display = "block"; // Muestra el botón
    return;
}
function copiarTexto(){
    let textoCopiado = document.getElementById('nuevoTexto').innerText;
    let tempTextarea = document.createElement("textarea");
    tempTextarea.value = textoCopiado;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
    asignarTextoElemento(`Texto copiado: <br> ${textoCopiado}`);
    botonOcultar();
    return;
}
function asignarTextoElemento(texto) {
    document.getElementById("myDIV").style.display = "none";
    let elementoHTML = document.getElementById('nuevoTexto');
    elementoHTML.innerHTML = texto;
    return;
}
function encriptar() {
    let textoDesencriptando = document.getElementById('usuarioMensaje').value;
    
    if (textoDesencriptando != '' && textoDesencriptando === textoDesencriptando.toLowerCase() && textoDesencriptando === textoDesencriptando.normalize("NFD").replace(/[\u0300-\u036f]/g, "") ){
        let encriptando = textoDesencriptando.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
        asignarTextoElemento(encriptando);
        botonMostrar();
    }else{
        asignarTextoElemento("ingresar un texto");
    }
    limpiarCaja();
    return;
}
function desencriptar() {
    let textoEncriptando = document.getElementById('usuarioMensaje').value;
    if (textoEncriptando != '' && textoEncriptando === textoEncriptando.toLowerCase() && textoEncriptando === textoEncriptando.normalize("NFD").replace(/[\u0300-\u036f]/g, "") ){
        let desencriptando = textoEncriptando.replace(/ufat/g, "u")
                            .replace(/ober/g, "o")
                            .replace(/ai/g, "a")
                            .replace(/imes/g, "i")
                            .replace(/enter/g, "e");
        asignarTextoElemento(desencriptando);
        botonMostrar();
    }else{
        asignarTextoElemento("Ingresar un texto válido (solo letras minúsculas y sin acentos)");
    }
    limpiarCaja()
    return;
}