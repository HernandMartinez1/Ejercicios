function calcularCargo(operador, minutos) {
    let cargoFijo, valorMinuto, valorPaquete;
    switch (operador) {
        case "tigo":
            cargoFijo = 45000;
            valorMinuto = 200;
            valorPaquete = 12000;
            break;
        case "claro":
            cargoFijo = 30000;
            valorMinuto = 100;
            valorPaquete = 18000;
            break;
        case "movistar":
            cargoFijo = 40000;
            valorMinuto = 250;
            valorPaquete = 8000;
            break;
        default:
            alert("Operador no válido");
            return null;
    }
    return cargoFijo + (minutos * valorMinuto);
}

do {
    let operador = prompt("Ingrese su operador (Tigo, Claro, Movistar):").toLowerCase();
    let minutos = parseInt(prompt("Ingrese la cantidad de minutos internacionales usados:"));

    let totalPagar = calcularCargo(operador, minutos);
    if (totalPagar !== null) {
        alert(`El costo total para el operador ${operador} con ${minutos} minutos es: $${totalPagar}.`);
    }

    var continuar = prompt("¿Desea hacer otra operacion? (si/no)").toLowerCase();
} while (continuar === "si");