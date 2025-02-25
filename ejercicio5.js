do{
fisica = parseFloat(prompt("Ingresa tu nota de fisica"));
quimica = parseFloat(prompt("Ingresa tu nota de quimica"));
biologia = parseFloat(prompt("Ingresa tu nota de biologia"));
matematicas = parseFloat(prompt("Ingresa tu nota de matematicas"));
informatica = parseFloat(prompt("Ingresa tu nota de informatica"));

if (isNaN(fisica) || isNaN(quimica) || isNaN(biologia) || isNaN(matematicas) || isNaN(informatica)) {
    alert("Por favor, ingresa solo números válidos.");
    continue; // Repite el bucle sin procesar el calculo
}

let sumaCalificaciones = fisica + quimica + biologia + matematicas + informatica;
let porcentaje = (sumaCalificaciones / 50) * 100;


let calificacion;
if (porcentaje < 60) {
    calificacion = "Mala";
} else if (porcentaje <= 80) {
    calificacion = "Buena";
} else {
    calificacion = "Excelente";
}

alert(`Tu nota es de ${porcentaje} y es ${calificacion}.`);
OtrasNotas = prompt("Desea ingresar diferentes notas? (si/no)").toLowerCase();
}while(OtrasNotas === "si")