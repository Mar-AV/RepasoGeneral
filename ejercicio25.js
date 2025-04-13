let opcion;
do {
    opcion = prompt("Seleccione una opción:\nA: Saludo simple\nB: Saludo personalizado\n3: Salir");
    if (opcion === "A") {
        console.log("Bienvenid@");
    } else if (opcion === "B") {
        let nombreIngresado = prompt("Ingrese su nombre:");
        console.log("Bienvenid@ " + nombreIngresado);
    }
} while (opcion !== "3");