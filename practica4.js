const calcularMCD = (a, b) => {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(calcularMCD(48, 18)); // 6
console.log(calcularMCD(56, 98)); // 14
console.log(calcularMCD(101, 103)); // 1
console.log(calcularMCD(20, 8)); // 4
console.log(calcularMCD(0, 5)); // 5
console.log(calcularMCD(5, 0)); // 5