var checkbox = document.getElementById("propietario");
var checkbox2 = document.getElementById("tercero");
var botonEnviarDatos = document.getElementById("boton");
var formulario = document.getElementById("infoConfidencial")
botonEnviarDatos.disable = true;

checkbox.addEventListener("click", validaCheckbox);
function validaCheckbox() {
    var checked = checkbox.checked;
    if (checked) {
        botonEnviarDatos.disabled = false;
    }
    else {
        botonEnviarDatos.disabled = true;
    }
}

checkbox2.addEventListener("click", oculForm);
function oculForm() {
    var checked = checkbox2.checked;
    if (checked) {
        formulario.style.visibility="visible";
    }
    else {
        formulario.style.visibility="hidden";
    }
}


