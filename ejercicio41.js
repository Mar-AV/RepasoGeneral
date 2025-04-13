function generarContraseña(longitud) {
    const caracteres = "abcdefghijklmnopqrstuvwxyz0123456789";
    let contraseña = "";
    for (let i = 0; i < longitud; i++) {
        let indice = Math.floor(Math.random() * caracteres.length);
        contraseña += caracteres[indice];
    }
    return contraseña;
}
console.log("Contraseña generada:", generarContraseña(6));