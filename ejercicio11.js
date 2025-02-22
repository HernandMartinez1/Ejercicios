let emitePitido = prompt("¿La computadora emite un pitido al iniciarse? (si/no)").toLowerCase() === "si";
let discoDuroGira = prompt("¿El disco duro gira? (si/no)").toLowerCase() === "si";

if (emitePitido && discoDuroGira) {
    console.log("Póngase en contacto con el tecnico de apoyo.");
} else if (emitePitido && !discoDuroGira) {
    console.log("Verificar contactos de la unidad.");
} else if (!emitePitido && !discoDuroGira) {
    console.log("Traiga la computadora para repararla en la central.");
} else {
    console.log("Compruebe las conexiones de altavoces.");
}
