
// 1. REGEX Y SELECTORES

const NOMBRE_USUARIO_REGEX = /[a-zA-Z][a-zA-Z0-9-_]{4,8}/; 
const EMAIL_REGEX =/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/; 
const NUMERO_TELEFONO_REGEX = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/; 
const CONTRASEÑA_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,10}$/; 
const CONFIRMAR_CONTRASEÑA_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,10}$/; 

// Selectores
const usernameInput = document.querySelector('#username');
const countries = document.querySelector('#countries');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const phoneCode = document.querySelector('#phone-code');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password'); 
const formBtn = document.querySelector('#form-btn');
const form = document.querySelector('#myForm');

// validaciones
let usernameValidation = false;
let emailValidation = false;
let phoneValidation = false;
let passwordValidation = false;
let confirmPasswordValidation = false;
let countriesValidation = false;


// 2. FUNCIÓN CENTRALIZADA

const validation = (e, validation, element) => {
    const information = e.target.parentElement.children[1];
    formBtn.disabled = !usernameValidation || !emailValidation || !phoneValidation || !passwordValidation || !confirmPasswordValidation || !countriesValidation ? true : false;
    if (validation) {
        element.classList.add('correct');
        element.classList.remove('incorrect');
        information.classList.remove('show-information');
    } else {
        element.classList.add('incorrect');
        element.classList.remove('correct');
        information.classList.add('show-information');
    }
};


// EVENT LISTENERS

/* Que solo se muestre el nombre del país y no el código (+) */
[...countries].forEach(option => {
    option.innerHTML = (option.innerHTML.split('(')[0]);
})

/* Nombre de Usuario */
usernameInput.addEventListener('input', e => {
     usernameValidation = NOMBRE_USUARIO_REGEX.test(e.target.value);
    validation(e, usernameValidation, usernameInput);
});

/* Email */
emailInput.addEventListener('input', e => {
     emailValidation = EMAIL_REGEX.test(e.target.value);
    validation(e, emailValidation, emailInput);
});

countries.addEventListener('input', e => {
    const optionSelected = [...e.target.children].find(option => option.selected);
    phoneCode.innerHTML = ` +${optionSelected.value} `;
    countries.classList.add('correct');
    countriesValidation = optionSelected.value !=='' ? true : false;
    phoneCode.classList.add('correct');
    validation(e, null, null);
});

/* Teléfono */
phoneInput.addEventListener('input', e => {
     phoneValidation = NUMERO_TELEFONO_REGEX.test(e.target.value);
  const information = e.target.parentElement.parentElement.children[1];
    if (phoneValidation) {
        phoneInput.classList.add('correct');
        phoneInput.classList.remove('incorrect');
        information.classList.remove('show-information');
    } else {
        phoneInput.classList.add('incorrect');
        phoneInput.classList.remove('correct');
        information.classList.add('show-information');
    }
});


/* Contraseña */
passwordInput.addEventListener('input', e => {
     passwordValidation = CONTRASEÑA_REGEX.test(e.target.value);
    validation(e, passwordValidation, passwordInput);
    });

/* Confirmar Contraseña */
confirmPasswordInput.addEventListener('input', (e) => {
    confirmPasswordValidation = passwordInput.value === e.target.value;
    validation(e, confirmPasswordValidation, confirmPasswordInput); 
});
 
// /* Envío del formulario */
 form.addEventListener('submit', e => {
    e.preventDefault();
     const user = {
        username: usernameInput.value,
        email: emailInput.value,
        phone: `${phoneCode.innerHTML} ${phoneInput.value}`,
        password: passwordInput.value,
    }
    console.log(user);
    
});