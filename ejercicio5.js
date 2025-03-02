function obtenerNotas() {
    let fisica = parseFloat(prompt("Ingresa tu nota de fisica"))
    let quimica = parseFloat(prompt("Ingresa tu nota de quimica"))
    let biologia = parseFloat(prompt("Ingresa tu nota de biologia"))
    let matematicas = parseFloat(prompt("Ingresa tu nota de matematicas"))
    let informatica = parseFloat(prompt("Ingresa tu nota de informatica"))

    if (isNaN(fisica) || isNaN(quimica) || isNaN(biologia) || isNaN(matematicas) || isNaN(informatica)) {
        alert("Por favor ingresa solo numeros validos")
        return null
    }

    return { fisica, quimica, biologia, matematicas, informatica }
}

function calcularPorcentaje(notas) {
    let sumaCalificaciones = notas.fisica + notas.quimica + notas.biologia + notas.matematicas + notas.informatica
    return (sumaCalificaciones / 50) * 100
}

function mostrarResultado(porcentaje) {
    let calificacion
    if (porcentaje < 60) {
        calificacion = "Mala"
    } else if (porcentaje <= 80) {
        calificacion = "Buena"
    } else {
        calificacion = "Excelente"
    }

    alert(`Tu nota es de ${porcentaje} y es ${calificacion}`)
}

do {
    let notas = obtenerNotas()
    if (notas === null) {
        continue // Repite el bucle sin procesar el calculo
    }

    let porcentaje = calcularPorcentaje(notas)
    mostrarResultado(porcentaje)

    var otrasNotas = prompt("Desea ingresar diferentes notas (si/no)").toLowerCase()
} while (otrasNotas === "si")
