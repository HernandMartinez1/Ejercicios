do{
let modeloAuto = parseInt(prompt("Ingrese el numero de modelo de su automovil:"));
let modelosDefectuosos = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780];

if (modelosDefectuosos.includes(modeloAuto)) {
    alert("El automovil esta defectuoso se tiene que llevar a garantia.");
} else {
    alert("Su automovil no esta defectuoso.");
}
continuar = true
}while(continuar == true)