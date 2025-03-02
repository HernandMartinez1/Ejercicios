function calcularSalario(horas) {
    let tarifaporhora = horas <= 10 ? 30000 : 33000;
    return horas * tarifaporhora;
}

function mostrarMensaje(nombre, horas, salario) {
    if (horas <= 15 && horas >= 0) {
        let mensaje = `Señor/a ${nombre}, el numero de horas es ${horas} y su salario equivale a ${salario}`;
        alert(mensaje);
    } else {
        alert("Numero de horas no valido");
    }
}
do{
let nombre1 = prompt("¿Cual es tu nombre?");
let horas1 = parseInt(prompt("¿Cuantas horas trabajaste?"));
let salario = calcularSalario(horas1);
mostrarMensaje(nombre1, horas1, salario);
}while(true)