function encriptar() {
    let texto = document.getElementById("text").value;
    let tituloMensaje = document.getElementById("tit-mnsj");
    let parrafo = document.getElementById("parrafo");
    let munieco = document.getElementById("munieco");

    let cifrarTexto = texto
        .replace(/a/gi, "air")
        .replace(/e/gi, "enhds")
        .replace(/i/gi, "insa")
        .replace(/o/gi, "obtus")
        .replace(/u/gi, "ufen");

    if (texto.length != 0) {
        document.getElementById("text").value = cifrarTexto;
        tituloMensaje.textContent = "Encriptado con exito.";
        parrafo.textContent = "";
        munieco.src = "./img/exito.jpg";
    } else {
        munieco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "No se encontró ningún texto.";
        parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
        alert("Debes ingresar texto.");
    }


}