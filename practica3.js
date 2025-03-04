const sumarDigitos = num => {
    let suma = 0;
    let numero = Math.abs(num); 

    while (numero > 0) {
        suma += numero % 10; 
        numero = Math.floor(numero / 10); 
    }

    return suma;
}

console.log(sumarDigitos(123)); // 6
console.log(sumarDigitos(456)); // 15
console.log(sumarDigitos(789)); // 24
console.log(sumarDigitos(-123)); // 6
console.log(sumarDigitos(0)); // 0