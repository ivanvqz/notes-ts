"use strict";
// enum es un tipo de dato que nos permite definir un conjunto de valores, es lo mismo que un objeto: llave y valor
var Paises;
(function (Paises) {
    Paises["Mex"] = "Mexico";
    Paises["Per"] = "Peru";
})(Paises || (Paises = {}));
const nacionalidad = (pais) => {
    if (pais === Paises.Mex) {
        console.log("Mexicano");
    }
    else if (pais === Paises.Per) {
        console.log("Peruano");
    }
    else {
        console.log("No se que eres");
    }
};
nacionalidad(Paises.Mex);
