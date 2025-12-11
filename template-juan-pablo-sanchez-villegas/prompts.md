Como un experto en el desarrollo web con JavaScript, HTML y CSS ayúdame a desarrollar lo siguiente:

Antes de entregar el código final, explica brevemente (en 3 puntos) tu plan de acción para asegurar que el código de validación cumple con todos los requerimientos y se integra correctamente en la estructura de los archivos proporcionados.

Te voy a dar dos archivos los cuales son un HTML con un formulario y un JavaScript donde necesito que implementes la lógica necesaria para poder realizar las validaciones respectivas a ese formulario.

El formulario debe validar lo siguiente:

##Nombre de usuario
	- *Obligatorio*
	- Debe tener al menos *5 caracteres*

##Email
	- *Obligatorio*
	- Debe tener un formato valido de email *(Ej. contener @, terminar en .<ext>)*

##Contraseña
	- *Obligatoria*
	- Debe tener al menos *8 caracteres*
	- Debe contener una letra mayúscula y un número.


#Requerimientos de código
	- El código de validación debe insertarse y ejecutarse en el archivo script.js
	- Se debe mostrar el mensaje de error de color rojo en el div correspondiente a cada campo si este falla.
	- Si el formulario es exitoso, debe mostrar un mensaje de éxito (#successMessage) y limpiarse.


###Archivo JS

"""
// Este archivo debe contener la lógica JavaScript para validar el formulario.

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Previene el envío por defecto del formulario
        
        // **AQUÍ VA LA LÓGICA DE VALIDACIÓN GENERADA POR IA**
        
        // Ejemplo de lógica (debe ser reemplazada):
        // const isFormValid = validateForm();
        
        // if (isFormValid) {
        //     document.getElementById('successMessage').textContent = '¡Registro exitoso!';
        //     form.reset();
        // } else {
        //     document.getElementById('successMessage').textContent = 'Por favor, corrige los errores en el formulario.';
        // }
    });
});

// Implementa aquí las funciones de validación.
// function validateForm() {
//    // ...
// }

"""


###Archivo HTML

"""
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Registro</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .form-group { margin-bottom: 15px; }
        label { display: block; margin-bottom: 5px; font-weight: bold; }
        input[type="text"], input[type="email"], input[type="password"] {
            width: 100%;
            padding: 8px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        .error { color: red; font-size: 0.9em; margin-top: 5px; }
    </style>
</head>
<body>
    <h1>Registro de Usuario</h1>
    <form id="registrationForm">
        <div class="form-group">
            <label for="username">Nombre de Usuario:</label>
            <input type="text" id="username" name="username">
            <div id="usernameError" class="error"></div>
        </div>

        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email">
            <div id="emailError" class="error"></div>
        </div>

        <div class="form-group">
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password">
            <div id="passwordError" class="error"></div>
        </div>

        <button type="submit">Registrar</button>
        <div id="successMessage" class="error" style="color: green;"></div>
    </form>

    <script src="script.js"></script>
</body>
</html>

"""