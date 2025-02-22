let tamano = prompt("Ingrese el tamaño del sandwich (pequeño/grande):").toLowerCase();
let tocineta = confirm("¿Desea agregar tocineta? (Costo: $3000)");
let jalapeno = confirm("¿Desea agregar jalapeño? (Gratis)");
let pavo = confirm("¿Desea agregar pavo? (Costo: $3000)");
let queso = confirm("¿Desea agregar queso? (Costo: $2500)");

let costoBase = tamano === "grande" ? 12000 : 6000;
let costoAdicional = (tocineta ? 3000 : 0) + (pavo ? 3000 : 0) + (queso ? 2500 : 0);
let costoTotalSandwich = costoBase + costoAdicional;

console.log(`El costo total de su sandwich ${tamano} es: $${costoTotalSandwich}.`);
