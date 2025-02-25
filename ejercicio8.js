do{
let dias = parseInt(prompt("Ingrese el número de días de la mensualidad (15, 30 o 90):"));
let costoMensualidad;

if (dias === 15) {
    costoMensualidad = 18000;
} else if (dias === 30) {
    costoMensualidad = 35000;
} else if (dias === 90) {
    costoMensualidad = 86000;
} else {
    costoMensualidad = "Opción no valida";
}

alert(`El costo de la mensualidad para ${dias} dias es: $${costoMensualidad}.`);
continuar = true
}while(continuar == true)