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
const products: [string, number][] = [
    ['Camisa', 50],
    ['Pantalon', 100],
    ['Gorra', 30]
];
console.log(products);
