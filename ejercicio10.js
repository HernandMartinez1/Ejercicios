do{
let copias = parseInt(prompt("Ingrese el numero de copias a imprimir:"));
let precioPorCopia;

if (copias >= 0 && copias <= 499) {
    precioPorCopia = 120;
} else if (copias >= 500 && copias <= 749) {
    precioPorCopia = 100;
} else if (copias >= 750 && copias <= 999) {
    precioPorCopia = 80;
} else {
    precioPorCopia = 50;
}

let precioTotal = copias * precioPorCopia;
alert(`El precio por copia es $${precioPorCopia} y el precio total es $${precioTotal}.`);
continuar = true
}while(continuar == true)