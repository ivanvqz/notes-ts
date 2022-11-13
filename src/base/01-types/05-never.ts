const API_BACKEND = 'http://localhost:3000';

// unknown indica que o tipo no fue definido
let pin: unknown = 123;
pin = '123';

function validarPin(): never {
    throw new Error("No hay conexión");
}

validarPin();