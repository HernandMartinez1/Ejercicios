function obtenerNumeros() {
    let num1 = parseInt(prompt("Ingrese el primer numero"))
    let num2 = parseInt(prompt("Ingrese el segundo numero"))
    let num3 = parseInt(prompt("Ingrese el tercer numero"))

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Por favor ingresa solo numeros validos")
        return null
    }

    return { num1, num2, num3 }
}

function encontrarMayor(numeros) {
    return Math.max(numeros.num1, numeros.num2, numeros.num3)
}

function mostrarMayor(mayor, numeros) {
    alert(`El numero mayor entre ${numeros.num1}, ${numeros.num2} y ${numeros.num3} es ${mayor}`)
}

do {
    let numeros = obtenerNumeros()
    if (numeros === null) {
        continue 
    }

    let mayor = encontrarMayor(numeros)
    mostrarMayor(mayor, numeros)

    continuar = prompt("Desea ingresar otros numeros (si/no)").toLowerCase() === "si"
} while (continuar)