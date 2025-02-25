do{
let numeroUsuario = parseInt(prompt("Ingrese un número:"));
let resultado = numeroUsuario % 2 === 0 ? "par" : "impar";
alert(`El numero ingresado es ${numeroUsuario} y es ${resultado}.`);
continuar = prompt("Deseas generar otro numero?(si/no)").toLowerCase()
}while(continuar === "si")