

let nombre1 = prompt("cual es tu nombre");
let horas1 = parseInt(prompt("cuantas horas trabajaste"));
let tarifaporhora = horas1 <= 10 ? 30000 : 33000;
let salario = horas1 * tarifaporhora;
let mensaje1;



if (horas1 <= 15 && horas1 >= 0){
    mensaje1 = `Señor/a ${nombre1}, el numero de horas es ${horas1} y su salario equivale a ${salario}`;
};
alert(mensaje1)