console.log('los pollitos dicen: "pio, pio, pio"');

/* nombre de usuario*/
const NOMBRE_USUARIO = /[a-zA-Z][a-zA-Z0-9-_]{3,32}/gi;
console.log(NOMBRE_USUARIO.test('Leandra_yanes1'));
console.log(NOMBRE_USUARIO.test('kiiwj2188---6'));


/* email*/
const EMAIL =/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
console.log(EMAIL.test ('leandrayaneshurtad@gmail.com'));
console.log(EMAIL.test ('leasdi125.com'));


/*numero de telefono*/
const NUMERO_TELEFONO =  /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm;
    console.log(NUMERO_TELEFONO.test ('+58 414 858 696'));
    console.log(NUMERO_TELEFONO.test ('1552lluyy'));


/*contraseña*/
const CONTRASEÑA = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,10}$/gm;
console.log(CONTRASEÑA.test ('louis123'));
console.log(CONTRASEÑA.test ('Louis123'));





