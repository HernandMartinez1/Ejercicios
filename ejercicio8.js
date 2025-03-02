function obtenerDias() {
    let dias = parseInt(prompt("Ingrese el numero de dias de la mensualidad (15, 30 o 90)"))
    if (isNaN(dias) || (dias !== 15 && dias !== 30 && dias !== 90)) {
        alert("Por favor ingresa una opcion valida")
        return null
    }
    return dias
}

function calcularCostoMensualidad(dias) {
    let costoMensualidad
    if (dias === 15) {
        costoMensualidad = 18000
    } else if (dias === 30) {
        costoMensualidad = 35000
    } else if (dias === 90) {
        costoMensualidad = 86000
    } else {
        costoMensualidad = "Opcion no valida"
    }
    return costoMensualidad
}

function mostrarCostoMensualidad(dias, costoMensualidad) {
    alert(`El costo de la mensualidad para ${dias} dias es $${costoMensualidad}`)
}

do {
    let dias = obtenerDias()
    if (dias === null) {
        continue
    }

    let costoMensualidad = calcularCostoMensualidad(dias)
    mostrarCostoMensualidad(dias, costoMensualidad)

    continuar = prompt("Desea ingresar otro numero de dias (si/no)").toLowerCase() === "si"
} while (continuar)