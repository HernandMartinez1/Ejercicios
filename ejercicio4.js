function generarNumeroYTipo() {
    let numero = Math.floor(Math.random() * 10) + 1;
    let tipo = numero % 2 === 0 ? "par" : "impar";
    alert(`el numero generado es ${numero} y es ${tipo}.`);
}

function verificarNumeroUsuario() {
    let numeroUsuario = parseInt(prompt("Ingrese un numero:"));
    let resultado = numeroUsuario % 2 === 0 ? "par" : "impar";
    alert(`El numero ingresado es ${numeroUsuario} y es ${resultado}.`);
}

do {
    let opcion = prompt("¿Desea generar un numero aleatorio o ingresar un numero? (aleatorio/ingresar)").toLowerCase();
    if (opcion === "aleatorio") {
        generarNumeroYTipo();
    } else if (opcion === "ingresar") {
        verificarNumeroUsuario();
    } else {
        alert("Opcion no valida");
    }
    var continuar = prompt("¿Deseas realizar otra operacion? (si/no)").toLowerCase();
} while (continuar === "si");