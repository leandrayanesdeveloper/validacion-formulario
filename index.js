
// 1. REGEX Y SELECTORES

const NOMBRE_USUARIO_REGEX = /[a-zA-Z][a-zA-Z0-9-_]{4,8}/; // Quité 'gi'
const EMAIL_REGEX =/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/; 
const NUMERO_TELEFONO_REGEX = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/; 
const CONTRASEÑA_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,10}$/; 
const CONFIRMAR_CONTRASEÑA_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,10}$/; 

// Selectores
const usernameInput = document.querySelector('#username');
const countries = document.querySelector('#countries');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirmar-password'); 


// 2. FUNCIÓN CENTRALIZADA

function actualizarEstadoCampo(campoInput, esValido) {
    const mensajeError = campoInput.parentElement.children[1];

    campoInput.classList.toggle('correct', esValido);
    campoInput.classList.toggle('incorrect', !esValido);
    mensajeError.classList.toggle('show-information', !esValido);
}

// Función para validar la confirmación de contraseña

const validarConfirmacionContraseña = () => {
    // 1. Verificar si la contraseña principal tiene al menos 8 caracteres (
    const passwordMinLength = passwordInput.value.length >= 8;
    // 2. Verificar si las contraseñas son iguales
    const esIgual = passwordInput.value === confirmPasswordInput.value;
    
    // Es válido solo si son iguales Y la contraseña principal cumple con el requisito mínimo (si aplica)
    const esValido = esIgual && passwordMinLength; 

    actualizarEstadoCampo(confirmPasswordInput, esValido);
};

// EVENT LISTENERS

/* Que solo se muestre el nombre del país y no el código (+) */
[...countries].forEach(option => {
    option.innerHTML = (option.innerHTML.split('(')[0]);
})

/* Nombre de Usuario */
usernameInput.addEventListener('input', e => {
    // Usamos el método test() directamente ya que quitamos las banderas problemáticas 'g'
    const usernameValidation = NOMBRE_USUARIO_REGEX.test(e.target.value);
    actualizarEstadoCampo(usernameInput, usernameValidation);
});

/* Email */
emailInput.addEventListener('input', e => {
    const emailValidation = EMAIL_REGEX.test(e.target.value);
    actualizarEstadoCampo(emailInput, emailValidation);
});

/* Teléfono */
phoneInput.addEventListener('input', e => {
    const phoneValidation = NUMERO_TELEFONO_REGEX.test(e.target.value);
    actualizarEstadoCampo(phoneInput, phoneValidation);
});

/* Contraseña */
passwordInput.addEventListener('input', e => {
    const passwordValidation = CONTRASEÑA_REGEX.test(e.target.value);
    actualizarEstadoCampo(passwordInput, passwordValidation);

    // Al cambiar la contraseña, revalidamos la confirmación inmediatamente
    if (confirmPasswordInput) {
        validarConfirmacionContraseña(); 
    }
});

/* Confirmar Contraseña */
if (confirmPasswordInput) {
    confirmPasswordInput.addEventListener('input', validarConfirmacionContraseña);
}