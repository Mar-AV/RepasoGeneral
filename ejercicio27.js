const NUMERO_SECRETO = Math.floor(Math.random() * 100) + 1;
console.log(`El número secreto es: ${NUMERO_SECRETO}`);
let intento;
do {
    intento = parseInt(prompt("Adivina el número:"));
    if (intento === NUMERO_SECRETO) {
        console.log("¡Adivinaste!");
    }
} while (intento !== NUMERO_SECRETO);