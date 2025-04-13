function validarCorreo(correo) {
    if (correo.includes("@") && correo.includes(".")) {
        console.log("Correo válido");
    } else {
        console.log("Correo inválido");
    }
}
let correo = prompt("Ingrese un correo:");
validarCorreo(correo);