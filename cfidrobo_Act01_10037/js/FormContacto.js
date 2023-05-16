function mostrarMensajeEnviando() {
    var boton = document.getElementById('BtnEnviar');
    boton.value = 'Enviando datos...'; // Cambiar el mensaje del botón

    setTimeout(function () {
        boton.disabled = true; // Deshabilitar el botón después de 1 segundo
        document.getElementById('FormContacto').submit(); // Enviar el formulario
    }, 5000);
}

function enviarFormulario() {
    var formulario = document.getElementById('FormContacto');
    formulario.submit(); // Enviar el formulario
}
function validar() {
    var email = document.getElementById('txtEmail').value;
    var telefono = document.getElementById('txtTelefono').value;

    var emailRegex = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;


    if (email === '' || telefono === '') {
        var boton = document.getElementById('BtnEnviar');
        boton.disabled = true; // Deshabilitar el botón si los campos no están llenos
    }

    if (!emailRegex.test(email)) {
        alert('Ingrese un correo electrónico válido.');
        return false; // Evita que el formulario se envíe
    }

    if (telefono.length !== 10 || isNaN(telefono)) {
        alert('Ingrese un número de teléfono válido de 10 dígitos.');
        return false; // Evita que el formulario se envíe
    }

    return true; // Permite el envío del formulario si pasa todas las validaciones
}
