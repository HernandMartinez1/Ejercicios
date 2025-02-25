do{
let tamano;
while(true){
tamano = prompt("Ingrese el tamaño del sandwich (pequeño / grande):").toLowerCase().trim();
    if (tamano === "pequeño" || tamano === "grande") {
        break;
    }
    alert("Por favor, ingrese un tamaño valido (pequeño o grande).");
}
let tocineta = prompt(("¿Desea agregar tocineta? (si/no) (Costo: $3000)")).trim();
let jalapeno = prompt(("¿Desea agregar jalapeño? (si/no) (Gratis)")).trim();
let pavo = prompt(("¿Desea agregar pavo? (si/no) (Costo: $3000)")).trim();
let queso = prompt(("¿Desea agregar queso? (si/no) (Costo: $2500)")).trim();

let costoBase = tamano === "grande" ? 12000 : 6000;
let costoAdicional = 
    (tocineta === "si" ? 3000 : 0) + 
    (pavo === "si" ? 3000 : 0) + 
    (queso === "si" ? 2500 : 0);

let costoTotalSandwich = costoBase + costoAdicional;

alert(`El costo total de su sandwich ${tamano} es: $${costoTotalSandwich}.`);
while (true){
    continuar = prompt("¿Desea hacer otro pedido? (si/no)").toLowerCase().trim();
    if(continuar === "si" || continuar === "no"){
        break;
    }
    alert("porfavor responda solo `si` o `no`.");
}

}while(continuar === "si")
