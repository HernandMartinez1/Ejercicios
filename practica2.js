const TipoDeNumero = (num) => {
    if (num % 1 !== 0) {
        return "Decimal";
    } else {
        return "Entero";
    }
}

const generarNumeroDeCuenta = (numeros) => {
    for (let i = 0; i < numeros.length; i++) {
        const num = numeros[i];
        const tipo = TipoDeNumero(num);
        if (tipo === "Decimal") {
            console.log(`Cuenta VIP: ${num}`);
        } else {
            console.log(`Cuenta Normal: ${num}`);
        }
    }
}

const numeros = [1.5, 4, 0.5];

generarNumeroDeCuenta(numeros);

