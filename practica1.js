
const calcularFactorial = num => {
    if (num < 0) {
        return "El numero debe ser un entero positivo.";
    }
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

console.log(calcularFactorial(5)); 
console.log(calcularFactorial(0));           
console.log(calcularFactorial(-3)); 