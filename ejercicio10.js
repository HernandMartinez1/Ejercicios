function obtenerNumeroDeCopias() {
    let copias = parseInt(prompt("Ingrese el numero de copias a imprimir"))
    if (isNaN(copias) || copias < 0) {
        alert("Por favor ingresa un numero valido de copias")
        return null
    }
    return copias
}

function calcularPrecioPorCopia(copias) {
    let precioPorCopia
    if (copias >= 0 && copias <= 499) {
        precioPorCopia = 120
    } else if (copias >= 500 && copias <= 749) {
        precioPorCopia = 100
    } else if (copias >= 750 && copias <= 999) {
        precioPorCopia = 80
    } else {
        precioPorCopia = 50
    }
    return precioPorCopia
}

function mostrarPrecio(copias, precioPorCopia) {
    let precioTotal = copias * precioPorCopia
    alert(`El precio por copia es $${precioPorCopia} y el precio total es $${precioTotal}`)
}

do {
    let copias = obtenerNumeroDeCopias()
    if (copias === null) {
        continue 
    }

    let precioPorCopia = calcularPrecioPorCopia(copias)
    mostrarPrecio(copias, precioPorCopia)

    continuar = prompt("Desea ingresar otro numero de copias (si/no)").toLowerCase() === "si"
} while (continuar)