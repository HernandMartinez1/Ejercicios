function obtenerTamano() {
    let tamano
    while (true) {
        tamano = prompt("Ingrese el tamaño del sandwich (pequeño / grande)").toLowerCase().trim()
        if (tamano === "pequeño" || tamano === "grande") {
            break
        }
        alert("Por favor ingrese un tamaño valido (pequeño o grande)")
    }
    return tamano
}

function obtenerAdicionales() {
    let tocineta = prompt("Desea agregar tocineta (si/no) (Costo: $3000)").trim()
    let jalapeno = prompt("Desea agregar jalapeño (si/no) (Gratis)").trim()
    let pavo = prompt("Desea agregar pavo (si/no) (Costo: $3000)").trim()
    let queso = prompt("Desea agregar queso (si/no) (Costo: $2500)").trim()
    return { tocineta, jalapeno, pavo, queso }
}

function calcularCosto(tamano, adicionales) {
    let costoBase = tamano === "grande" ? 12000 : 6000
    let costoAdicional = 
        (adicionales.tocineta === "si" ? 3000 : 0) + 
        (adicionales.pavo === "si" ? 3000 : 0) + 
        (adicionales.queso === "si" ? 2500 : 0)
    return costoBase + costoAdicional
}

function mostrarCosto(tamano, costoTotal) {
    alert(`El costo total de su sandwich ${tamano} es $${costoTotal}`)
}

function deseaContinuar() {
    while (true) {
        let continuar = prompt("Desea hacer otro pedido (si/no)").toLowerCase().trim()
        if (continuar === "si" || continuar === "no") {
            return continuar === "si"
        }
        alert("Por favor responda solo si o no")
    }
}

do {
    let tamano = obtenerTamano()
    let adicionales = obtenerAdicionales()
    let costoTotal = calcularCosto(tamano, adicionales)
    mostrarCosto(tamano, costoTotal)
} while (deseaContinuar())
