const numeros = [10, 15, 20, 25, 30, 5];
let suma = 0;
let i = 0;
while (i < numeros.length && suma < 100) {
    suma += numeros[i];
    i++;
}
console.log("Suma:", suma);
console.log("Números usados:", i);