
const calcularPromedio = (numeros) => {
    const suma = numeros.reduce((acc, num) => acc + num, 0);
    return suma / numeros.length;
}

const compararPromedio = (numeros, valor) => {
    const promedio = calcularPromedio(numeros);
    if (promedio > valor) {
        return `El promedio (${promedio}) es mayor que ${valor}`;
    } else if (promedio < valor) {
        return `El promedio (${promedio}) es menor que ${valor}`;
    } else {
        return `El promedio (${promedio}) es igual a ${valor}`;
    }
}

const numeros = [10, 20, 30, 40, 50];
const valorComparacion = 25;
const resultado = compararPromedio(numeros, valorComparacion);
console.log(resultado);