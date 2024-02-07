function encriptar() {
    let texto = document.getElementById("text").value;
    let tituloMensaje = document.getElementById("tit-mnsj");
    let parrafo = document.getElementById("parrafo");
    let munieco = document.getElementById("munieco");

    let cifrarTexto = texto
        .replace(/e/gi, "ends")
        .replace(/i/gi, "inri")
        .replace(/a/gi, "als")
        .replace(/o/gi, "onde")
        .replace(/u/gi, "ufo");

    if (texto.length != 0) {
        document.getElementById("text").value = cifrarTexto;
        tituloMensaje.textContent = "Encriptado con exito.";
        parrafo.textContent = "";
        munieco.src = "./img/good.jpg";
    } else {
        munieco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "No se encontró ningún texto.";
        parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
        swal(" Uy!!", "Debes ingresar texto.", "warning");
    }
}
function desencriptar() {
    let texto = document.getElementById("text").value;
    let tituloMensaje = document.getElementById("tit-mnsj");
    let parrafo = document.getElementById("parrafo");
    let munieco = document.getElementById("munieco");

    let descifrarTexto = texto
        .replace(/ends/gi, "e")
        .replace(/inri/gi, "i")
        .replace(/als/gi, "a")
        .replace(/onde/gi, "o")
        .replace(/ufo/gi, "u");

    if (texto.length != 0) {
        document.getElementById("text").value = descifrarTexto;
        tituloMensaje.textContent = "Desencriptado con exito.";
        parrafo.textContent = "";
        munieco.src = "./img/detective.jpg";
    } else {
        munieco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "No se encontró ningún texto.";
        parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
        swal(" Uy!!", "Debes ingresar texto.", "warning");
    }
   
}