function diagnosticarProblema() {
    let emitePitido = prompt("La computadora emite un pitido al iniciarse (si/no)").toLowerCase() === "si"
    let discoDuroGira = prompt("El disco duro gira (si/no)").toLowerCase() === "si"

    if (emitePitido && discoDuroGira) {
        alert("Pongase en contacto con el tecnico de apoyo")
    } else if (emitePitido && !discoDuroGira) {
        alert("Verificar contactos de la unidad")
    } else if (!emitePitido && !discoDuroGira) {
        alert("Traiga la computadora para repararla en la central")
    } else {
        alert("Compruebe las conexiones de altavoces")
    }
}

do {
    diagnosticarProblema()
    continuar = prompt("Desea realizar otro diagnostico (si/no)").toLowerCase() === "si"
} while (continuar)