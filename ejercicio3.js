function calcularCostoAlquiler(tipoLavadora, cantidad, horasAlquiler) {
    let costoPorHora = tipoLavadora === 1 ? 4000 : 3000;
    let costoTotal = cantidad * horasAlquiler * costoPorHora;
    if (cantidad > 3) {
        costoTotal *= 0.97; // Aplicar descuento del 3%
    }
    return costoTotal;
}

function mostrarMensaje(costoTotal) {
    alert(`El costo total de su alquiler de lavadoras es ${costoTotal}`);
}

do {
    let tipoLavadora = Number(prompt("Ingrese el tipo de lavadora que desea: 1. Lavadora pequeña 2. Lavadora grande"));
    let cantidad = Number(prompt("Ingrese la cantidad de lavadoras que va a utilizar"));
    let horasAlquiler = Number(prompt("Ingrese las horas que va a alquilarlas"));

    let costoTotal = calcularCostoAlquiler(tipoLavadora, cantidad, horasAlquiler);
    mostrarMensaje(costoTotal);

    var continuar = prompt("¿Desea hacer algun alquiler mas? (si/no)").toLowerCase();
} while (continuar === "si");