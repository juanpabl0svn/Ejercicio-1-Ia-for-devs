// Este archivo debe contener la lógica JavaScript para validar el formulario.

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const successMessage = document.getElementById('successMessage');

    // Función principal que limpia los mensajes de error
    const clearErrors = () => {
        document.getElementById('usernameError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('passwordError').textContent = '';
        successMessage.textContent = ''; // Limpiamos el mensaje de éxito también
    };

    // Función para mostrar un error en el div correspondiente
    const setError = (elementId, message) => {
        document.getElementById(elementId).textContent = message;
    };

    // 1. Validación de Nombre de Usuario
    const validateUsername = (username) => {
        if (username.trim() === '') {
            setError('usernameError', 'El nombre de usuario es obligatorio.');
            return false;
        }
        if (username.length < 5) {
            setError('usernameError', 'El nombre de usuario debe tener al menos 5 caracteres.');
            return false;
        }
        return true;
    };

    // 2. Validación de Email
    const validateEmail = (email) => {
        if (email.trim() === '') {
            setError('emailError', 'El email es obligatorio.');
            return false;
        }
        // Regex para un formato de email básico: [algo]@[algo].[ext]
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        if (!emailRegex.test(email)) {
            setError('emailError', 'El formato del email no es válido (ej. usuario@dominio.com).');
            return false;
        }
        return true;
    };

    // 3. Validación de Contraseña
    const validatePassword = (password) => {
        if (password.trim() === '') {
            setError('passwordError', 'La contraseña es obligatoria.');
            return false;
        }
        
        // Requisito 1: Al menos 8 caracteres (length)
        if (password.length < 8) {
            setError('passwordError', 'La contraseña debe tener al menos 8 caracteres.');
            return false;
        }
        
        // Requisito 2: Debe contener una letra mayúscula y un número
        // (?=.*[A-Z]) -> debe contener al menos una mayúscula
        // (?=.*\d)   -> debe contener al menos un dígito
        const securityRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
        
        if (!securityRegex.test(password)) {
            setError('passwordError', 'La contraseña debe contener al menos una letra mayúscula y un número.');
            return false;
        }
        
        return true;
    };

    // Función que ejecuta todas las validaciones
    const validateForm = () => {
        // Obtenemos los valores del formulario
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // 1. Limpiamos errores al inicio
        clearErrors();

        // 2. Ejecutamos validaciones.
        // El uso de && es clave: si el primero falla, no se chequea el resto.
        // Pero para asegurar que se muestren TODOS los errores, 
        // chequeamos y almacenamos el resultado de cada una de forma independiente.
        
        const isUsernameValid = validateUsername(username);
        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);

        // 3. El formulario es válido solo si TODAS las validaciones pasan
        return isUsernameValid && isEmailValid && isPasswordValid;
    };
    
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Previene el envío por defecto
        
        const isFormValid = validateForm();
        
        if (isFormValid) {
            // Éxito: Muestra mensaje y limpia formulario
            successMessage.textContent = '¡Registro exitoso! El formulario es válido.';
            form.reset(); 
        } else {
            // Fallo: Los errores ya se mostraron en los divs correspondientes
            successMessage.textContent = ''; 
        }
    });
});