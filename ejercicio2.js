function generarNumeroYTipo() {
    let numero = Math.floor(Math.random() * 10) + 1;
    let tipo = numero % 2 === 0 ? "par" : "impar";
    alert(`El numero generado es ${numero} y es ${tipo}.`);
}

do {
    generarNumeroYTipo();
    var continuar = prompt("¿Desea generar otro numero? (si/no)").toLowerCase();
} while (continuar === "si");
