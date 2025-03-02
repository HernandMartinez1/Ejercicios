function verificarModeloDefectuoso(modeloAuto) {
    let modelosDefectuosos = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780]
    if (modelosDefectuosos.includes(modeloAuto)) {
        alert("El automovil esta defectuoso se tiene que llevar a garantia")
    } else {
        alert("Su automovil no esta defectuoso")
    }
}

do {
    let modeloAuto = parseInt(prompt("Ingrese el numero de modelo de su automovil"))
    if (isNaN(modeloAuto)) {
        alert("Por favor ingrese un numero de modelo valido")
        continue 
    }

    verificarModeloDefectuoso(modeloAuto)

    continuar = prompt("Desea verificar otro modelo (si/no)").toLowerCase() === "si"
} while (continuar)