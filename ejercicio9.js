do{
let angulo1 = parseInt(prompt("Ingrese el primer angulo del triangulo:"));
let angulo2 = parseInt(prompt("Ingrese el segundo angulo del triangulo:"));
let angulo3 = parseInt(prompt("Ingrese el tercer angulo del triangulo:"));

let esTrianguloValido = (angulo1 + angulo2 + angulo3) === 180;
alert(`Los angulos ingresados ${esTrianguloValido ? "forman" : "no forman"} un triangulo valido.`);
continuar = true
}while(continuar == true)