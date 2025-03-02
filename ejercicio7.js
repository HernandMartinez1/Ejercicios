function obtenerDatos() {
    let genero = prompt("Ingrese su genero (femenino/masculino)").toLowerCase()
    let edad = parseInt(prompt("Ingrese su edad"))

    if (isNaN(edad)) {
        alert("Por favor ingresa una edad valida")
        return null
    }

    return { genero, edad }
}

function calcularAyuda(datos) {
    let ayuda
    if (datos.genero === "femenino") {
        if (datos.edad > 50) {
            ayuda = 120000
        } else if (datos.edad >= 30) {
            ayuda = 100000
        } else {
            ayuda = 0
        }
    } else if (datos.genero === "masculino") {
        ayuda = 40000
    } else {
        ayuda = "Genero no valido"
    }
    return ayuda
}

function mostrarAyuda(ayuda) {
    alert(`El valor de ayuda mensual es $${ayuda}`)
}

do {
    let datos = obtenerDatos()
    if (datos === null) {
        continue 
    }

    let ayuda = calcularAyuda(datos)
    mostrarAyuda(ayuda)

    continuar = prompt("Desea ingresar otros datos (si/no)").toLowerCase() === "si"
} while (continuar)