do{
let num1 = parseInt(prompt("Ingrese el primer numero:"));
let num2 = parseInt(prompt("Ingrese el segundo numero:"));
let num3 = parseInt(prompt("Ingrese el tercer numero:"));

let mayor = Math.max(num1, num2, num3);

alert(`El numero mayor entre ${num1}, ${num2} y ${num3} es ${mayor}.`);
continuar = true
}while(continuar == true)