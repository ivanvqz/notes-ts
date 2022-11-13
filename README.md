# Typescript
## types
Puedes especificar qué tipo de valores son los parámetros de una función, y qué tipo de valor devuelve.
```typescript
type pares = 2 | 4 | 6 | 8 | 10;
type parametros = number;
// numeros pares e impares
const numerosP = [2, 4, 6, 8, 10];
const pares = (num: pares) => {
    console.log('Si es válido');
}
pares(2)
pares(3) // Error
```

## enums
enum es un tipo de dato que nos permite definir un conjunto de valores, es lo mismo que un objeto: llave y valor:
```typescript
enum Paises {
    Mex = "Mexico",
    Per = "Peru",
}
const nacionalidad = (pais: string) => {
    if(pais === Paises.Mex) {
        console.log("Mexicano");
    } else if(pais === Paises.Per) {
        console.log("Peruano");
    } else {
        console.log("No se que eres");
    }
}
nacionalidad("Peru")
```

## tuplas
Las tuplas son un tipo de dato que nos permite definir un arreglo con un número fijo de elementos, cada uno con un tipo de dato específico. Consta de dos posiciones (0 y 1) y cada posición tiene un tipo de dato específico.
```typescript
type name= string;
type age= number;
type p = string
const persona1:[name, age, p] = ["Juan", 25, "hola"];
const persona2:[name, age] = ["ivan", 22];
const persona3:[name, age] = ["Naomi", 20];
const persona4:[name, age] = ["Yami", 18];
const persona5:[name, age] = ["Ofelia", 23];
const persona6:[name, age] = ["Carmela", 22];
console.log(persona3);

// lista de productos con tuplas
// es un arreglo de tuplas
// const products: [string, number][] = [
//     ['Camisa', 50],
//     ['Pantalon', 100],
//     ['Gorra', 30]
// ];
// console.log(products);
```

## unknown
unknown es un tipo de dato que nos permite asignar cualquier tipo de valor a una variable, pero no podemos acceder a sus propiedades o métodos, a menos que hagamos una comprobación de tipo.
```typescript
const API_BACKEND = 'http://localhost:3000';

// unknown indica que o tipo no fue definido
let pin: unknown = 123;
pin = '123';
// la función no acepta el tipo unknown
if(typeof pin === 'number'){
    console.log('ok');
} else {
    throw new Error("No hay conexión");
}
```

## never
se usa para indicar que una función nunca va a retornar un valor.
```typescript
const API_BACKEND = 'http://localhost:3000';

// unknown indica que o tipo no fue definido
let pin: unknown = 123;
pin = '123';

function validarPin(): never {
    throw new Error("No hay conexión");
}

validarPin();
```

## void
void es un tipo de dato que nos permite indicar que una función no retorna ningún valor.
```typescript
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
```

## any
any es un tipo de dato que nos permite asignar cualquier tipo de valor a una variable, pero no podemos acceder a sus propiedades o métodos, a menos que hagamos una comprobación de tipo.
- Con esto nos podemos saltar las validaciones de ts.

# Funciones e interfaces
## Parámetros opcionales
Son parámetros que no son obligatorios, se definen con un signo de interrogación.
```typescript
type Auth = {
    id: number;
    name: string;
    age: number;
    isAdmin: boolean;
    nacionality?: string;
}

const isAuth = (id: number, name: string, age: number, isAdmin: false, nacionality?: string): Auth => {
    return {id, name, age, isAdmin, nacionality};
    
}

isAuth(12, "Ivan", 23, false);
```
Sin embargo, es recomendable tener un valor por defecto, para que no se nos olvide pasar el parámetro. El operador nullish coalescing nos permite asignar un valor por defecto a un parámetro opcional.
```typescript
nacionality: nacionality ?? 'World'
```