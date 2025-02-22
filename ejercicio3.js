let tipoLavadora = 1; 
let cantidad = 4; 
let horasAlquiler = 5; 


let costoPorHora = tipoLavadora === 1 ? 4000 : 3000;


let costoTotal = cantidad * horasAlquiler * costoPorHora;

if (cantidad > 3) {
    costoTotal *= 0.97; 
}
