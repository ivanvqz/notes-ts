// enum es un tipo de dato que nos permite definir un conjunto de valores, es lo mismo que un objeto: llave y valor
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
nacionalidad(Paises.Mex)