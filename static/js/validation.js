        
        const formulario = document.getElementById('miFormulario');
        formulario.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita que el formulario se envíe automáticamente

            // Validación personalizada minimo 10 digitos
            const telefono = document.getElementById('telefono').value;
            if (telefono.length < 10) {
                alert('El número de teléfono debe tener mínimo 10 dígitos.');
                return;
            }
            // Valida email un @ y por lo menos un "."
            const email = document.getElementById('email').value;
            if (!email.includes('@') || !email.includes('.')) {
                alert('Por favor, introduce un email válido.');
                return;
            }

            // Si todo está correcto, puedes enviar el formulario al servidor aquí
            alert('Formulario enviado correctamente.');
        });