function obtenerAngulos() {
    let angulo1 = parseInt(prompt("Ingrese el primer angulo del triangulo"))
    let angulo2 = parseInt(prompt("Ingrese el segundo angulo del triangulo"))
    let angulo3 = parseInt(prompt("Ingrese el tercer angulo del triangulo"))

    if (isNaN(angulo1) || isNaN(angulo2) || isNaN(angulo3)) {
        alert("Por favor ingresa solo numeros validos")
        return null
    }

    return { angulo1, angulo2, angulo3 }
}

function esTrianguloValido(angulos) {
    return (angulos.angulo1 + angulos.angulo2 + angulos.angulo3) === 180
}

function mostrarResultado(esValido) {
    alert(`Los angulos ingresados ${esValido ? "forman" : "no forman"} un triangulo valido`)
}

do {
    let angulos = obtenerAngulos()
    if (angulos === null) {
        continue 
    }

    let esValido = esTrianguloValido(angulos)
    mostrarResultado(esValido)

    continuar = prompt("Desea ingresar otros angulos (si/no)").toLowerCase() === "si"
} while (continuar)