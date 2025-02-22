let nombre1 = prompt("cual es tu nombre");
let horas1 = parseInt(prompt("cuantas horas trabajaste"));
let tarifaporhora = horas1 <= 10 ? 30000 : 33000;
let salario = horas1 * tarifaporhora;
let mensaje1;

if (horas1 <= 15 && horas1 >= 0){
    mensaje1 = `Señor/a ${nombre1}, el numero de horas es ${horas1} y su salario equivale a $${salario}`;
};

//con esto hago que aparesca un mensaje en la web con html
document.getElementById('respuesta1').innerHTML = `
<h2>SALARIO</H2> <br>
<strong>Salario:</strong>${mensaje1}`;

console.log(mensaje1)