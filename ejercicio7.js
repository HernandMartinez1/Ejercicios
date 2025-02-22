let genero = prompt("Ingrese su genero (femenino/masculino):").toLowerCase();
let edad = parseInt(prompt("Ingrese su edad:"));

let ayuda;
if (genero === "femenino") {
    if (edad > 50) {
        ayuda = 120000;
    } else if (edad >= 30) {
        ayuda = 100000;
    } else {
        ayuda = 0;
    }
} else if (genero === "masculino") {
    ayuda = 40000;
} else {
    ayuda = "Genero no valido";
}

console.log(`El valor de ayuda mensual es: $${ayuda}.`);
