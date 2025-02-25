do{
let operador = prompt("Ingrese su operador (Tigo, Claro, Movistar):").toLowerCase();
let minutos = parseInt(prompt("Ingrese la cantidad de minutos internacionales usados:"));

let cargoFijo, valorMinuto, valorPaquete;
if (operador === "tigo") {
    cargoFijo = 45000;
    valorMinuto = 200;
    valorPaquete = 12000;
} else if (operador === "claro") {
    cargoFijo = 30000;
    valorMinuto = 100;
    valorPaquete = 18000;
} else if (operador === "movistar") {
    cargoFijo = 40000;
    valorMinuto = 250;
    valorPaquete = 8000;
} else {
    alert("Operador no valido");
}

let totalPagar = cargoFijo + (minutos * valorMinuto);
alert(`El costo total para el operador ${operador} con ${minutos} minutos es: $${totalPagar}.`);
continuar = prompt("Desea hacer otra operacion? (si/no)").toLowerCase();
}while (continuar === "si")