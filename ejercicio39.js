function sumarArreglo(arreglo) {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return suma;
}
let numeros = [];
let continuar;
do {
    let num = parseFloat(prompt("Ingrese un número:"));
    numeros.push(num);
    continuar = prompt("¿Desea ingresar otro número? (sí/no)");
} while (continuar.toLowerCase() === "sí");
console.log("Suma total:", sumarArreglo(numeros));