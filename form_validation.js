$(document).ready(function() {
    $('#contactForm').on('submit', function(event) {
        event.preventDefault();

        // Limpia los mensajes de error previos
        $('.error').text('');

        var formData = {
            nombre: $('#nombre').val(),
            correo: $('#correo').val(),
            genero: $('input[name="genero"]:checked').val(),
            comentario: $('#comentario').val(),
            ciudad: $('#ciudad').val(),
            interes: $('#interes').is(':checked') ? 'Sí' : 'No'
        };

        $.ajax({
            type: 'POST',
            url: 'process_form.php',
            data: formData,
            dataType: 'json',
            encode: true
        }).done(function(response) {
            if (response.success) {
                $('#form-response').html('<p class="success">¡Formulario enviado con éxito!</p>');
                $('#contactForm')[0].reset();
            } else {
                // Muestra mensajes de error en los campos correspondientes
                if (response.errors) {
                    $('#nombre-error').text(response.errors.nombre);
                    $('#correo-error').text(response.errors.correo);
                    $('#genero-error').text(response.errors.genero);
                    $('#comentario-error').text(response.errors.comentario);
                    $('#ciudad-error').text(response.errors.ciudad);
                }
            }
        }).fail(function(data) {
            $('#form-response').html('<p class="error">Hubo un error al enviar el formulario. Por favor, intenta de nuevo.</p>');
        });
    });
});
