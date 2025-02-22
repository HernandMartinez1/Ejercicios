let fisica = 7;
let quimica = 8;
let biologia = 6;
let matematicas = 9;
let informatica = 7;

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

console.log(`Tu porcentaje es ${porcentaje.toFixed(2)}% y tu calificación es ${calificacion}.`);
