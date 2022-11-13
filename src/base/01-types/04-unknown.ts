const API_BACKENDS = 'http://localhost:3000';

// unknown indica que o tipo no fue definido
let ping: unknown = 123;
pin = '123';
// la función no acepta el tipo unknown
if(typeof ping === 'number'){
    console.log('ok');
} else {
    throw new Error("No hay conexión");
}