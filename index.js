
// validacion
/* nombre de usuario*/
const NOMBRE_USUARIO = /[a-zA-Z][a-zA-Z0-9-_]{4,8}/i;
/* email*/
const EMAIL =/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
/*numero de telefono*/
const NUMERO_TELEFONO =  /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm;
/*contraseña*/
const CONTRASEÑA = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,10}$/gm;

//selectores 
const  usernameInput = document.querySelector('#username');
const countries = document.querySelector('#countries');

//validaciones
let usernameValidation = false;

/*que solo se muestre el nombre del país y no el código (+)*/

[...countries].forEach(option =>{
  option.innerHTML =  (option.innerHTML.split('(')[0]);
})


usernameInput.addEventListener('input', e => {
   usernameValidation = NOMBRE_USUARIO.test(e.target.value);
   const informacion = e.target.parentElement.children[1];

  if (usernameValidation) {
    usernameInput.classList.remove('incorrect');
    usernameInput.classList.add('correct');
    informacion.classList.remove('show-information');
  } else {
    usernameInput.classList.remove('correct');
    usernameInput.classList.add('incorrect');
    informacion.classList.add('show-information');
  }
 });

 
 
    
