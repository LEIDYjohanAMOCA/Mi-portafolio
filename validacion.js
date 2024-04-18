//Haz tú validación en javascript acá
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.formulario');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        // Obtener los valores de los campos
        const nombreApellido = document.getElementById('nombreapellido').value.trim();
        const correoElectronico = document.getElementById('correoelectronico').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        // Validar que los campos obligatorios no estén vacíos
        if (!nombreApellido || !correoElectronico || !telefono || !mensaje) {
            alert('Por favor, completa todos los campos.');
            return; // Detener el proceso de envío del formulario
        }

        // Validar formato del correo electrónico con una expresión regular
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(correoElectronico)) {
            alert('Por favor, introduce un correo electrónico válido.');
            return; // Detener el proceso de envío del formulario
        }

        // Si todos los campos están completos y el correo es válido, enviar el formulario
        // Aquí puedes agregar código para enviar el formulario a través de AJAX o cualquier otra acción necesaria
        alert('Formulario enviado correctamente.');

        // Puedes agregar aquí más acciones como enviar los datos a través de AJAX
        // Ejemplo: enviarDatos(nombreApellido, correoElectronico, telefono, mensaje);

        // Resetear el formulario después de enviar (opcional)
        form.reset();
    });
});
