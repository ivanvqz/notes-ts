const API_BACKENs = 'http://localhost:3000';

// unknown indica que o tipo no fue definido
let pins: unknown = 123;
pin = '123';

function validarPins(): void {
    if(typeof pin === 'number'){
        console.log('ok');
    } else {
        throw new Error("No hay conexión");
    }
}

validarPins();