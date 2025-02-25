do{
let tipoLavadora = Number(prompt(`Ingrese el tipo de lavadora que desea: 1.Lavadora pequeña 2.lavadora grande`));
let cantidad =  Number(prompt(`Ingresa la cantidad de lavadoras que vas a utilizar`))
let horasAlquiler = Number(prompt(`Ingrese las horas que va a alquilarlas`)); 

let costoPorHora = tipoLavadora === 1 ? 4000 : 3000;
let costoTotal = cantidad * horasAlquiler * costoPorHora;

if (cantidad > 3) {
    costoTotal *= 0.97; 
}
alert(`costo total de su alquiler de lavadoras es ${costoTotal}`)
continuar = prompt("desea hacer algun alquier mas? (si/no)").toLowerCase();
}while (continuar === "si")